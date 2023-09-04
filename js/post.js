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

    var apiKey = process.env.BLOGGER_API_KEY;

    var blogId = process.env.BLOGGER_BLOG_ID;

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

            postElement.innerHTML += '<div class="post-bottom"><img width="150" src="./images/logo-white-background.jpg" alt="Chef Kohn logo" class="logo"><p>If you were inspired by the ideas shared in this article and desire an unforgettable dining experience, consider Chef Kohns private chef services. With a passion for crafting personalized culinary moments and a commitment to using the finest ingredients, We’re here to turn your dining dreams into reality.</p><p>To discuss your vision, inquire about availability, or learn more, please <a href="/#contactUsHere">Contact us here</a>. Lets create lasting culinary memories together. Thank you for considering Chef Kohn for your next extraordinary meal.</p></div>'
        });
}



window.addEventListener('load', fetchAndDisplayPost);