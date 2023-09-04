

function fetchAndDisplayAllPosts() {
    // Replace 'YOUR_API_KEY' with your actual API key
    var apiKey = vars.BLOGGER_API_KEY;

    // Replace 'YOUR_BLOG_ID' with the ID of your actual Blogger blog
    var blogId = vars.BLOGGER_BLOG_ID;

    // Build the URL for the Blogger API request
    var url = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey;

    var domainName = 'http://127.0.0.1:5500';

    // Make the API request using the fetch() method
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var posts = data.items;

            // Loop through the posts and display them on the page
            for (var i = 0; i < posts.length; i++) {

                var post = posts[i];
                var imgEndIndex;
                // Create a new HTML element for the post
                var postElement = document.createElement('div');
                postElement.classList.add('post');

                // Set the post content
                var imgStartIndex = post.content.indexOf('<img ');
                if (imgStartIndex !== -1) {
                    imgEndIndex = post.content.indexOf('>', imgStartIndex) + 1;
                    var imgTag = post.content.substring(imgStartIndex, imgEndIndex);

                    var srcStartIndex = imgTag.indexOf('src="') + 5;
                    var srcEndIndex = imgTag.indexOf('"', srcStartIndex);
                    var src = imgTag.substring(srcStartIndex, srcEndIndex);

                    postElement.innerHTML = '<img src="' + src + '" alt="Post image">';
                }

                postElement.innerHTML += `<div class="post-date">Published ${new Date(post.published).toLocaleDateString()}</div>` + `<h2 class="post-title">${post.title}</h2>` + `<a class="read" href="${domainName}/post.html?id=${post.id}">Read More</a>`;

                // Add the post to the page
                document.getElementById('postsContainer').appendChild(postElement);
            }
        });
    // data.forEach(post => {
    //     const postElement = document.createElement('div');
    //     postElement.classList.add('post');
    //     postElement.innerHTML = `
    //             <img src="${post.thumbnail}" alt="Thumbnail">
    //             <div class="post-date">${post.date}</div>
    //             <h2 class="post-title">${post.title}</h2>
    //             <a class="read" href="/post.html/?id=${post.id}">Read More</a>
    //         `;
    //     postsContainer.appendChild(postElement);
    // });
}

window.addEventListener('load', fetchAndDisplayAllPosts);