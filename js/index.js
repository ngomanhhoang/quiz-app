const cardBookmark = document.querySelector('[data-js="card__bookmark"]');
cardBookmark.addEventListener("click", (e) => {
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
const cardButton = document.querySelector('[data-js="card__button"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');
cardButton.addEventListener("click", () => {
  if (cardAnswer.classList.toggle("hidden")) {
    cardButton.innerHTML = `Show Answer`;
  } else {
    cardButton.innerHTML = `Hide Answer`;
  }
});
