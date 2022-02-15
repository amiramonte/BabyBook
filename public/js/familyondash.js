const removeFamilyMemberBtn = document.querySelector('#removeFamilyBtn');


const removeFamilyMember = async function (event) {
    event.preventDefault();

    const familyId = parseInt(document.querySelector('#family-id').textContent)

    console.log(familyId);
    
    const response = await fetch(`/api/user/removeuser/${familyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });


      if (response.ok) {
          document.location.reload('/dashboard')
      } else {
          alert('We were not able to remove your family member')
      }
  }

  removeFamilyMemberBtn.addEventListener('click', removeFamilyMember);