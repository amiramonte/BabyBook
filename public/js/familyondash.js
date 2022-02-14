console.log('testing familyondash.js connection');

const removeFamilyMemberBtn = document.querySelector('#removeFamilyBtn');

const removeFamilyMember = async function (event) {
    event.preventDefault();

    const response = await fetch('/api/user/removeuser', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);

      if (response.ok) {
          document.location.replace('/dashboard')
      } else {
          alert('We were not able to remove your family member')
      }

  }


  removeFamilyMemberBtn.addEventListener('click', removeFamilyMember);