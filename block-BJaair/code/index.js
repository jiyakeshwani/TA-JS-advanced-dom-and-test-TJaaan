function createUI(title, category) {
  let cardContainer = document.querySelector(".notice");
  let card = document.createElement("div");
  card.classList.add("card");
  let h3 = document.createElement("h3");
  h3.innerText = category;
  h3.contentEditable = true;
  let h2 = document.createElement("h2");
  h2.innerText = title;
  h2.contentEditable = true;
  card.append(h3, h2);
  cardContainer.append(card);
}
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  createUI(title, category);
});
