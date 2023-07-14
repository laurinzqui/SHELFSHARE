function postComment() {
    const commentText = document.getElementById('floatingTextarea').value;
    if (commentText.trim() === '') return;
  
    const previousComments = document.getElementById('previousComments');
  
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
  
    const commentHeader = document.createElement('div');
    commentHeader.classList.add('comment-header');
  
    const profilePhoto = document.createElement('img');
    profilePhoto.classList.add('profile-photo');
    profilePhoto.src = './assets/imgs/Brandon.jpg';
    profilePhoto.alt = 'Foto Brandon';
  
    const commentAuthor = document.createElement('h3');
    commentAuthor.classList.add('comment-author');
    commentAuthor.textContent = '@BranMan94';
  
    const commentTime = document.createElement('p');
    commentTime.classList.add('comment-time');
    const currentDate = new Date();
    commentTime.textContent =
      'Publicado el ' +
      currentDate.toLocaleDateString() +
      ' a las ' +
      currentDate.toLocaleTimeString();
  
    commentHeader.appendChild(profilePhoto);
    commentHeader.appendChild(commentAuthor);
    commentHeader.appendChild(commentTime);
  
    const commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');
  
    const commentTextElement = document.createElement('p');
    commentTextElement.textContent = commentText;
  
    const replyButton = document.createElement('button');
    replyButton.classList.add('reply-btn');
    replyButton.textContent = 'Responder';
    replyButton.onclick = function () {
      startThread(this);
    };
  
    commentContent.appendChild(commentTextElement);
    commentContent.appendChild(replyButton);
  
    newComment.appendChild(commentHeader);
    newComment.appendChild(commentContent);
  
    previousComments.insertBefore(newComment, previousComments.firstChild);
  
    document.getElementById('floatingTextarea').value = '';
  }
  
  function startThread(replyButton) {
    const commentContent = replyButton.parentNode.parentNode;
  
    if (commentContent.querySelector('.thread-input')) {
      return;
    }
  
    const threadInput = document.createElement('div');
    threadInput.classList.add('thread-input');
  
    const threadHeader = document.createElement('div');
    threadHeader.classList.add('reply-header');
  
    const profilePhoto = document.createElement('img');
    profilePhoto.classList.add('profile-photo');
    profilePhoto.src = './assets/imgs/Brandon.jpg';
    profilePhoto.alt = 'Foto Brandon';
  
    const replyAuthor = document.createElement('h3');
    replyAuthor.classList.add('reply-author');
    replyAuthor.textContent = '@TuUsuario';
  
    const replyTime = document.createElement('p');
    replyTime.classList.add('reply-time');
    const currentDate = new Date();
    replyTime.textContent =
      'Publicado el ' +
      currentDate.toLocaleDateString() +
      ' a las ' +
      currentDate.toLocaleTimeString();
  
    threadHeader.appendChild(profilePhoto);
    threadHeader.appendChild(replyAuthor);
    threadHeader.appendChild(replyTime);
  
    const threadTextarea = document.createElement('textarea');
    threadTextarea.classList.add('form-control');
    threadTextarea.placeholder = 'Deja una respuesta...';
  
    const threadButton = document.createElement('button');
    threadButton.classList.add('btn', 'btn-outline-primary');
    threadButton.textContent = 'Publicar';
    threadButton.onclick = function () {
      postReply(this);
    };
  
    const threadContent = document.createElement('div');
    threadContent.classList.add('reply-content');
  
    threadContent.appendChild(threadTextarea);
    threadContent.appendChild(threadButton);
  
    threadInput.appendChild(threadHeader);
    threadInput.appendChild(threadContent);
  
    commentContent.appendChild(threadInput);
  }
  
  function postReply(threadButton) {
    const replyText = threadButton.parentNode.querySelector('textarea').value;
    if (replyText.trim() === '') return;
  
    const threadInput = threadButton.parentNode.parentNode;
    const commentContent = threadInput.parentNode;
  
    const replyElement = document.createElement('div');
    replyElement.classList.add('reply');
  
    const replyHeader = document.createElement('div');
    replyHeader.classList.add('reply-header');
  
    const profilePhoto = document.createElement('img');
    profilePhoto.classList.add('profile-photo');
    profilePhoto.src = './assets/imgs/Brandon.jpg';
    profilePhoto.alt = 'Foto Brandon';
  
    const replyAuthor = document.createElement('h3');
    replyAuthor.classList.add('reply-author');
    replyAuthor.textContent = '@TuUsuario';
  
    const replyTime = document.createElement('p');
    replyTime.classList.add('reply-time');
    const currentDate = new Date();
    replyTime.textContent =
      'Publicado el ' +
      currentDate.toLocaleDateString() +
      ' a las ' +
      currentDate.toLocaleTimeString();
  
    replyHeader.appendChild(profilePhoto);
    replyHeader.appendChild(replyAuthor);
    replyHeader.appendChild(replyTime);
  
    const replyTextElement = document.createElement('p');
    replyTextElement.textContent = replyText;
  
    const replyButton = document.createElement('button');
    replyButton.classList.add('reply-btn');
    replyButton.textContent = 'Responder';
    replyButton.onclick = function () {
      startThread(this);
    };
  
    const replyContent = document.createElement('div');
    replyContent.classList.add('reply-content');
  
    replyContent.appendChild(replyTextElement);
    replyContent.appendChild(replyButton);
  
    replyElement.appendChild(replyHeader);
    replyElement.appendChild(replyContent);
  
    commentContent.appendChild(replyElement);
  
    commentContent.removeChild(threadInput);
  }