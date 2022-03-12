const commentsUrl = `https://olgacerovic.no/coffee-nomad/wp-json/wp/v2/comments?consumer_key=ck_946c851fd99cd6bc49a12feed747722bb1ab2c69&consumer_secret=cs_ed72963b1ad013f799e0b23e53729cb1239429d3`;

const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
  postComment();
});

const postComment = () => {
  console.log("test");
  // ACTION_URL = "https://your-wordpress-site.com/wp-json/wp/v2/comments"

  const commentValue = document.getElementById("comment").value;

  let urlP = window.location.href;

  let urlL = new URL(urlP);

  let search_param = urlL.searchParams;
  let id = search_param.get("id");

  const data = JSON.stringify({
    post: id,
    author_name: "Olga",
    author_email: "olga@dd.com",
    content: commentValue,
  });
  console.log(data);
  fetch(commentsUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (response.ok === true) {
        console.log(response);
      }

      return response.json();
    })
    .then((object) => {
      // Comment submission failed.
      // Output object.message to see the error message.
    })
    .catch((error) => console.error("Error:", error));
};
