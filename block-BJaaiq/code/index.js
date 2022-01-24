const container = document.querySelector(".container");

let index = 0;

// get the images

function displayQuotes() {
  for (let i = 0; i < quotes.length; i++) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = quotes[index].quoteText;
    const span = document.createElement("span");
    span.innerText = quotes[index].quoteAuthor;
    container.append(div, p, span);
    index++;
  }
}

displayQuotes();

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    displayQuotes();
  }
});
window.addEventListener("DOMContentLoaded", () => {
  alert("Dom content is loaded");
  displayQuotes();
});
