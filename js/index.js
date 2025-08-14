const cardBookmark = document.querySelector('[data-js="card__bookmark"]')
cardBookmark.addEventListener("click", (e) => {
    e.preventDefault()
    const currentSrc = e.target.src
    if(currentSrc.endsWith("bookmark.svg")){
        e.target.src = "./assets/icons/bookmark-solid.svg"
    console.log(currentSrc);
    }else{
        e.target.src = "./assets/icons/bookmark.svg"
    }
})