const url = `https://olgacerovic.no/coffee-nomad/wp-json/wc/v3/products?per_page=20&consumer_key=ck_946c851fd99cd6bc49a12feed747722bb1ab2c69&consumer_secret=cs_ed72963b1ad013f799e0b23e53729cb1239429d3`;
data = [];

numPost = 10;
const getData = async (url, searchInputValue = null) => {
  try {
    const containerDiv = document.getElementById("container");
    const loader = document.getElementById("loader");
    containerDiv.style.display = "none";
    loader.style.display = "block";
    const response = await fetch(url);
    const result = await response.json();
    const filteredResults = searchInputValue
      ? result.filter((product) =>
          product.name.toLowerCase().includes(searchInputValue.toLowerCase())
        )
      : result;
    console.log(filteredResults);
    searchInputValue && filteredResults
      ? insertFilteredPost(filteredResults)
      : fillData(result);
    console.log(result);
    data = searchInputValue ? filteredResults : result;
  } catch (error) {
    console.log(error);
  }
};

getData(url);

const inputField = document.getElementById("inputField");
const searchButton = document.getElementById("searchButton");

searchButton.onclick = function searchPosts() {
  getData(url, inputField.value);
};

function fillData(response) {
  // data = response;

  let html = "";
  let showcase = document.querySelector(".subscribe-section");
  html += `<img
   src="${response[1].images[0].src}"
   alt="Camping coffee equipment by lake"
  />
  <div id="sub2">
   <h2>Subscribe here</h2>
   <label> Email </label>
   <input id="inputField" type="text" />
   <button class="formButton2">Subscribe</button>
   <div class="subscribeModal">
   Thank you for your subscription! We will keep you updated!
 </div>
  </div>`;

  insertPosts(response, numPost);

  showcase.innerHTML = html;

  const message = document.querySelector(".subscribeModal");
  const sub = document.querySelector(".formButton2");
  console.log(sub);
  sub.addEventListener("click", function () {
    message.style.display = "block";
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  });
}

var postContainer = document.querySelector(".post-list");

const showMore = document.querySelector("#show-more");
showMore.addEventListener("click", function () {
  numPost += 2;
  insertPosts(data, numPost);
});

function insertPosts(response, num) {
  let html = "";

  response.forEach((element, index) => {
    if (index >= 5 && index < 5 + num) {
      html += ` <div class="post-details">
    <a href="https://upbeat-darwin-d2da9a.netlify.app//post-specific.html?id=${index}"> 
    <img
      src="${element.images[0].src}"
      alt="${element.name}"
    />
    <h2>
    ${element.name}
    </h2>
    </a>
  </div>`;
    }
  });

  postContainer.innerHTML = html;

  const containerDiv = document.getElementById("container");
  const loader = document.getElementById("loader");
  containerDiv.style.display = "block";
  loader.style.display = "none";
}

function insertFilteredPost(response) {
  let html = "";

  response.forEach((element, index) => {
    console.log(element);

    html += ` <div class="post-details">
    <a href="https://upbeat-darwin-d2da9a.netlify.app//post-specific.html?id=${index}"> 
    <img
      src="${element.images[0].src}"
      alt="${element.name}"
    />
    <h2>
    ${element.name}
    </h2>
    </a>
  </div>`;
  });

  postContainer.innerHTML = html;

  const containerDiv = document.getElementById("container");
  const loader = document.getElementById("loader");
  containerDiv.style.display = "block";
  loader.style.display = "none";
}
