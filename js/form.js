const main = document.querySelector("main");
const form = document.querySelector("form");
const questionCount = document.querySelector('[data-js="question__count"]');
const answerCount = document.querySelector('[data-js="answer__count"]');
const input = document.querySelector('[data-js="input"]');
const questionInput = document.querySelector('[data-js="question__input"]');
const answerInput = document.querySelector('[data-js="answer__input"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const section = document.createElement("section");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  section.classList.add("card");
  img.classList.add("card__bookmark");
  h2.classList.add("card__question");
  p.classList.add("card__answer");
  p.classList.add("hidden");
  button.classList.add("card__button");
  ul.classList.add("card__tags");
  li.classList.add("card__tag");

  img.src = "./assets/icons/bookmark.svg";
  img.alt = "bookmark icon";
  h2.textContent = data.question;
  p.textContent = data.answer;
  button.textContent = "Show Answer";
  li.textContent = data.tag;

  ul.append(li, li, li);
  section.append(img, h2, p, button, ul);
  main.append(section);

  img.addEventListener("click", (e) => {
    e.preventDefault();
    const currentSrc = e.target.src;
    if (currentSrc.endsWith("bookmark.svg")) {
      e.target.src = "./assets/icons/bookmark-solid.svg";
      console.log(currentSrc);
    } else {
      e.target.src = "./assets/icons/bookmark.svg";
    }
  });

  // Show Answer
  button.addEventListener("click", () => {
    if (p.classList.toggle("hidden")) {
      button.innerHTML = `Show Answer`;
    } else {
      button.innerHTML = `Hide Answer`;
    }
  });
});

function count(e) {
  const maxLength = 150;
  const characters = maxLength - e.target.value.length;
  if (e.target.id === "question") {
    questionCount.textContent = `${characters} characters left`;
  } else if (e.target.id === "answer") {
    answerCount.textContent = `${characters} characters left`;
  }
}
questionInput.addEventListener("input", count);
answerInput.addEventListener("input", count);
