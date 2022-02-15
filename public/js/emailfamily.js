const emailFamilyBtn = document.querySelector('#emailFamily');

const stat = document.getElementById('emailSent')
let msg = document.getElementById('status')
const x = document.getElementsByClassName('x')[0]

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
          msg.innerText = ''

          if (response.ok) {
              stat.style.display = 'block'
              msg.innerHTML = 'Your email was sent successfully!'
          } else {
              stat.style.display = 'block'
              msg.innerText = 'There was a problem sending your email.'
          }
        
    } catch (error) {
        console.log(error);
    }
}

x.addEventListener('click', function() {

    stat.style.display = 'none'
})

window.onclick = function(event) {
    if (event.target == stat) {
        stat.style.display = 'none'
    }
}

emailFamilyBtn.addEventListener('click', sendEmail);