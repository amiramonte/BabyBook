const signupForm = document.querySelector('#signupForm');

const signupHandler = async function(event) {
  event.preventDefault();

  const signupObj = {
    firstname: document.querySelector('#firstName').value,
    lastname: document.querySelector('#lastName').value,
    username: document.querySelector('#username').value,
    email: document.querySelector('#emailAddress').value,
    password: document.querySelector('#password').value
  }

  console.log(signupObj);

  const response = await fetch('/api/user/sign-up', {
    method: 'POST',
    body: JSON.stringify(signupObj),
    headers: {
       'Content-Type': 'application/json' 
      },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Something is missing. Please provide all requested information.');
  }

}


signupForm.addEventListener("submit", signupHandler);
