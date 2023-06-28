// Add a comment to the comment list
function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentText = commentInput.value;

    if (commentText) {
        var commentList = document.getElementById('commentList');
        var commentItem = document.createElement('p');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);

        commentInput.value = '';
    }
}

// Handle form submission
document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    addComment();
});

// ... Existing JavaScript code ...

// Handle previous chapter button click
document.getElementById('previousChapter').addEventListener('click', function () {
    // Code to go to the previous chapter
});

// Handle return to index button click
document.getElementById('returnToIndex').addEventListener('click', function () {
    // Code to return to the index
});

// Handle next chapter button click
document.getElementById('nextChapter').addEventListener('click', function () {
    // Code to go to the next chapter
});
// ... Existing JavaScript code ...

// Handle previous chapter button click
document.getElementById('previousChapter').addEventListener('click', function () {
    // Code to go to the previous chapter
});

// Handle return to index button click
document.getElementById('returnToIndex').addEventListener('click', function () {
    // Code to return to the index
});

// Handle next chapter button click
document.getElementById('nextChapter').addEventListener('click', function () {
    // Code to go to the next chapter
});

// ... Existing JavaScript code ...

// Handle previous chapter button click
document.getElementById('previousChapter').addEventListener('click', function () {
    // Code to go to the previous chapter
});

// Handle return to index button click
document.getElementById('returnToIndex').addEventListener('click', function () {
    // Code to return to the index
});

// Handle next chapter button click
document.getElementById('nextChapter').addEventListener('click', function () {
    // Code to go to the next chapter
});
