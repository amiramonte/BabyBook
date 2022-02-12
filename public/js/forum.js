const newPostHandler =  async function(event){
    event.preventDefault()

    const title =  document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
console.log(title)
    const response = await fetch('/api/thread/', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {  'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/forum');
      } else {
        alert('Something is missing. Please provide all requested information.');
      }

}

document.getElementById('forumPost').addEventListener('submit', newPostHandler)