var Login_Page = /** @class */ (function () {
    function Login_Page() {
    }
    Login_Page.prototype.login = function () {
        var txtuname = (document.getElementById('UserName')).value;
        var txtpwd = (document.getElementById('Password')).value;
        var txtselectedname = (document.getElementById('SelectUserName')).value;
        var txtselectedpwd = (document.getElementById('SelectPassword')).value;
        if (txtselectedname != 'default' && txtselectedpwd != 'default') {
            txtuname = txtselectedname;
            txtpwd = txtselectedpwd;
        }
        if (txtuname.length != 0 && txtpwd.length != 0) {
            fetch('/Home/Index?userName=' + txtuname + '&password=' + txtpwd)
                .then(function (response) {
                console.log(response.headers.get('Content-Type'));
                console.log(response.status);
            });
        }
    };
    return Login_Page;
}());
window.onload = function () {
    var bttn = document.getElementById("login");
    var obj = new Login_Page();
    bttn.onclick = function () {
        obj.login();
    };
};
//# sourceMappingURL=Login_Page.js.map