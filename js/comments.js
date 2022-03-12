const url = `https://olgacerovic.no/coffee-nomad/wp-json/wc/v3/wp-json/wp/v2/comments?consumer_key=ck_946c851fd99cd6bc49a12feed747722bb1ab2c69&consumer_secret=cs_ed72963b1ad013f799e0b23e53729cb1239429d3`;

const postComment = (e, postId = 116) => {
  // ACTION_URL = "https://your-wordpress-site.com/wp-json/wp/v2/comments"
  e.preventDefault();
  const data = JSON.stringify({
    post: postId,
    author_name: "Olga",
    author_email: email.value,
    content: comment.value,
  });
  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (response.ok === true) {
        // Submitted successfully!
      }

      return response.json();
    })
    .then((object) => {
      // Comment submission failed.
      // Output object.message to see the error message.
    })
    .catch((error) => console.error("Error:", error));
};
