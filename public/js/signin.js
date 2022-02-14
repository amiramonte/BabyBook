const signinForm = document.querySelector('#signinForm');

const signinHandler = async function(event) {
  event.preventDefault();

  const signinObj = {
    email: document.querySelector('#emailAddress').value,
    password: document.querySelector('#password').value
  }

  console.log(signinObj);

  const response = await fetch('/api/user/sign-in', {
    method: 'POST',
    body: JSON.stringify(signinObj),
    headers: {
       'Content-Type': 'application/json' 
      },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Incorrect email or password. Please try again.');
  }

}


signinForm.addEventListener("submit", signinHandler);