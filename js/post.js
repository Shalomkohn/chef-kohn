function fetchAndDisplayPost() {

    function getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var postId = getParameterByName('id');

    var apiKey = 'AIzaSyA9iKcboIjlTgZHo06uidZ-ZwbNJIw5zmU';

    var blogId = '8116048013103488470';

    var url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}`

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (post) {

            var postElement = document.querySelector('.post-container');

            postElement.innerHTML = '<h1>' + post.title + '</h1>' +
                `<div class="post-date">Published ${new Date(post.published).toLocaleDateString()}</div>`;

            postElement.innerHTML += post.content;

            postElement.innerHTML += '<div class="post-bottom"><img width="150" src="./images/logo-white-background.jpg" alt="Chef Kohn logo" class="logo"><p>To discuss your vision, inquire about availability, or learn more about Chef Kohn kosher private chef services, Feal free to <a href="/#contactUsHere">Contact Us</a>. Lets create lasting memories together.</p></div>'
        });
}



window.addEventListener('load', fetchAndDisplayPost);