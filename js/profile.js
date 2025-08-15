const slide = document.querySelector("input[type=checkbox]")

slide.addEventListener("change", (e) => {
    if(e.target.checked) {
        document.body.classList.toggle("darkmode")
    }else {
        document.body.classList.toggle("darkmode")
    }
})