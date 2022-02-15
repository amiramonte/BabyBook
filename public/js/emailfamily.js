const emailFamilyBtn = document.querySelector('#emailFamily');


const sendEmail = async function (event) {
    event.preventDefault()

    try {
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json' 
              },
          });
        
          console.log(response);

          if (response.ok) {
              alert('Your Email was sent!')
          } else {
                alert('Something went wrong!');
          }
        
    } catch (error) {
        console.log(error);
    }
  }
  

emailFamilyBtn.addEventListener('click', sendEmail);