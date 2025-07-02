



// signup
var userNameInput = document.getElementById('signupName');
var passwordInput = document.getElementById('signupPassword');
var emailInput = document.getElementById('signupEmail');
var btnSignup = document.getElementById('sign-up');
var signupAlert = document.querySelector('.alert-signup');
var users = [];
let emailExist;
if (localStorage.getItem('users' )!== null) {
  users = JSON.parse(localStorage.getItem('users'));
}

if (btnSignup) {
  btnSignup.addEventListener('click', createAccount);
}


function createAccount() {
  var user = {
    userName: userNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value
  }

   emailExist = false;

  for (let i = 0; i < users.length ; i ++) {
    if(users[i].email === user.email){
      
       emailExist = true;

       
    }
  }

  if (emailExist) {
    signupAlert.classList.remove('d-none');
    signupAlert.classList.add('alert-danger');
    signupAlert.innerHTML = 'Email already exists';
    signupAlert.classList.remove('alert-success');
  } else {

    signupAlert.classList.remove('d-none');
    signupAlert.classList.add('alert-success');
    signupAlert.classList.remove('alert-danger');
    signupAlert.innerHTML = 'success';
    users.push(user);

  localStorage.setItem('users', JSON.stringify(users));
  }

};




//signin


var signinEmailInput = document.getElementById('signinEmail');
var signinPasswordInput = document.getElementById('signinPassword');
var signinAlert = document.querySelector('.alert-signin');
var btnSignin = document.getElementById('sign-in');
let emailIsFound;

var currentUser = null;
if(btnSignin) {
  btnSignin.addEventListener('click', signInUser);
 
}

function signInUser() {
  emailIsFound = false;

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === signinEmailInput.value.trim() &&
      users[i].password === signinPasswordInput.value.trim()
    ) {
      emailIsFound = true;
      currentUser = users[i];
      
    }
  }

  if (emailIsFound) {
    signinAlert.classList.add('d-none');
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    window.location.href = "welcome.html";
    

  } else {
    signinAlert.classList.remove('d-none');
  }

}



//display data


var greetingMsg = document.getElementById('greeting');
 
function displayGreeting() {
  var  userMessage = JSON.parse(localStorage.getItem('loggedInUser'));

  if (userMessage && greetingMsg) {
    greetingMsg.innerHTML = `<h1 class="text-info opacity-75">Hello ${userMessage.userName}</h1>`;
  }
}

displayGreeting();

