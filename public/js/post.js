const newFormHandler = async (event) => {
    event.preventDefault();
    const post_id = JSON.parse(event.target.getAttribute('data-id'));
    const content = document.querySelector('#comment-desc').value.trim();
  
    if (content) {
      const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);