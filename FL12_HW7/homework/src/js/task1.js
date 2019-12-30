let email = prompt('Please enter your e-mail');
let emailSymbols = 5;
let passwordSymbols = 6;
let password, changePass, oldPass, newPass, newPassConfirm;

if (email === '' || email === null) {
  alert('Canceled.');
} else if (email.length < emailSymbols) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('Please enter your password');

    if (password === '' || password === null) {
      alert('Canceled.');
    } else {

      if (email === 'user@gmail.com' && password !== 'UserPass') {
        alert('Wrong password');
      } else if (email === 'admin@gmail.com' && password !== 'AdminPass') {
        alert('Wrong password');
      } else {
        changePass = confirm('Do you want to change your password?');

        if (changePass === false || changePass === null) {
          alert('You have failed the change.');
        } else {
          oldPass = prompt('Please enter your old password');

          if (oldPass === '' || oldPass === null) {
            alert('Canceled.');
          } else if (oldPass !== password) {
            alert('Wrong password');
          } else {
            newPass = prompt('Please enter your new password');

            if (newPass === '' || newPass === null) {
              alert('Canceled.');
            } else if (newPass.length < passwordSymbols) {
              alert('It’s too short password. Sorry');
            } else {
              newPassConfirm = prompt('Please enter your new password again');

              if (newPass !== newPassConfirm) {
                alert('You wrote the wrong password.');
              } else {
                alert('You have successfully changed your password.');
              }
            }
        }
      }
    } 
  } 
} else {
    alert('I don’t know you');
}
  



