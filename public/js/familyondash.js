console.log('testing familyondash.js connection');

const removeFamilyMemberBtn = document.querySelector('#removeFamilyBtn');

const removeFamilyMember = async function (event) {
    event.preventDefault();

    const response = await fetch('/api/user/removeuser/:id', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          
      } else {
          
      }

  }