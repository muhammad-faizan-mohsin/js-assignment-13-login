// localStorage.setItem("email", "faizan@gmail.com")
// localStorage.setItem("pass", "faizan123")
// var email = localStorage.getItem("email")
// var pass = localStorage.getItem("pass")
// var passInput = document.getElementById("pass-input")
// var emailInput = document.getElementById("email-input")




//     if (email === emailInput.value && pass === passInput.value) {
//         window.location.href ="index.html";
  
//     } else {
//          alert("Invalid username or password. Please try again.");

//     }
// }
// Swal.fire({
//     icon: 'success',
//     title: 'Success!',
//     text: 'The condition is true.',
//   });

localStorage.setItem("email", "faizan@gmail.com");
localStorage.setItem("password", "faizan123");

function login(event) {
    event.preventDefault();
    var savedEmail = localStorage.getItem("email");
    var savedPassword = localStorage.getItem("password");
  
    var enteredEmail = document.getElementById("email-input").value;
    var enteredPassword = document.getElementById("pass-input").value;

    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Logged in!',
            text: 'Wellcome to Quiz',
            showConfirmButton: false,
          });

          setTimeout(() => {
        location.assign("login.html");
    }, 1000);
      
    } else {
        Swal.fire({
            icon: 'error',
            text: 'Your email or password are incorrect ',
          });        }

      
  }

