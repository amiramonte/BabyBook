const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const firstNameEl = document.querySelector('#firstname-input');
    const lastNameEl = document.querySelector('#lasttname-input');
    const usernameEl = document.querySelector('#un-signup');
    const emailEl = document.querySelector('#email-signup');
    const passwordEl = document.querySelector('#email-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        username: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dash');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signupForm')
    .addEventListener('submit', signupFormHandler);
  