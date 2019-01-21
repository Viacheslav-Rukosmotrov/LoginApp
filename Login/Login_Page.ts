
function EmailOptionChanged(): any  {
     let emailOption = (<HTMLTextAreaElement>(document.getElementById('SelectUserEmail'))).value;
     (<HTMLTextAreaElement>(document.getElementById('UserEmail'))).value = emailOption;
}

function PasswordOptionChanged(): any {
    let passwordOption = (<HTMLTextAreaElement>(document.getElementById('SelectPassword'))).value;
    (<HTMLTextAreaElement>(document.getElementById('UserPassword'))).value = passwordOption;
}




