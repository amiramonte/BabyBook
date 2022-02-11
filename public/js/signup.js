const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const firstNameEl = document.querySelector('#firstname-input');
    const lastNameEl = document.querySelector('#lasttname-input');
    const usernameEl = document.querySelector('#un-signup');
    const emailEl = document.querySelector('#email-signup');
    const passwordEl = document.querySelector('#pw-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstNameEl,
        lastName: lastNameEl,
        username: usernameEl,
        email: emailEl,
        password: passwordEl,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('dash');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signupForm')
    .addEventListener('submit', signupFormHandler);
  