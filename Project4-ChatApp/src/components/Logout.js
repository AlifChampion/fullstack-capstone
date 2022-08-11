const Logout = () => {
    const logout = () => {
        // google.accounts.id.revoke('user@google.com', done => {
        //     console.log('consent revoked');
        // });
        window.localStorage.clear();
        window.location.reload();
    };

    return (
        <div>
            <button type="submit" onClick={logout} style={{ backgroundColor: 'rgb(202, 188, 220)', borderRadius: '5px', paddingLeft: '8px', paddingRight: '8px', paddingBlock: '4px' }}>Logout</button>
        </div>
    );
};

export default Logout;
