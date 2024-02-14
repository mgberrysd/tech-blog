// JS for adding a comment on the individual post pages
// Makes a post request to the comments api then reloads the page to show the newly posted comment

const newComment = async (event) => {
    event.preventDefault();
    const post_id = event.target.getAttribute('data-id');
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
  
  document.querySelector('.new-comment-form').addEventListener('submit', newComment);