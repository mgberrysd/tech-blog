// JS for updating a post
// Very similar to making a new post except that it is a put request for a specific id

const newFormHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    console.log(id)

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-desc').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to update post');
      }
    }
  };

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);