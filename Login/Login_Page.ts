


class Login_Page {
    login() {
        var txtuname = (<HTMLTextAreaElement>(document.getElementById('UserName'))).value;
        var txtpwd = (<HTMLTextAreaElement>(document.getElementById('Password'))).value;
        var txtselectedname = (<HTMLTextAreaElement>(document.getElementById('SelectUserName'))).value;
        var txtselectedpwd = (<HTMLTextAreaElement>(document.getElementById('SelectPassword'))).value;

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
    }
}
            window.onload = () => {
                var bttn = document.getElementById("login");
                var obj = new Login_Page();
                bttn.onclick = function () {
                    obj.login();
                }
            };

