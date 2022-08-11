import React, { useEffect, useRef } from 'react'

const loadScript = (src) =>
    new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve()
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    })

const GoogleAuth = () => {
    //const { token, setToken, setGoogleId } = useContext(AuthContext);
    const googleButton = useRef(null);

    useEffect(() => {
        // all the script is get at the google cloud
        console.log('EFFECT RUNNING');
        const src = 'https://accounts.google.com/gsi/client'
        const id = "212943273540-hbq3r9sufv65m1qk6g4h0iod1msgb7sj.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                /*global google*/
                console.log(google)
                google.accounts.id.initialize({
                    client_id: id,
                    callback: handleCredentialResponse,
                })
                /*render the google button*/
                google.accounts.id.renderButton(
                    googleButton.current,
                    { theme: 'dark', size: 'medium', width: 360, backgroundColor: 'black' }
                )
            })
            .catch(console.error)

        return () => {
            const scriptTag = document.querySelector(`script[src="${src}"]`)
            if (scriptTag) document.body.removeChild(scriptTag)
        }
    }, [])

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        console.log("Decoded JWT ID token: " + JSON.stringify(parseJwt(response.credential)));
    }

    return (
        <button fullWidth variant="contained" ref={googleButton}>Sign In</button>
    )
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export default GoogleAuth
