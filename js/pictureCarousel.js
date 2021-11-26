const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".carousel").children;
const totalImages = images.length;
let index = 0;

prevBtn.addEventListener("click", () => {
  nextImage("next");
})

nextBtn.addEventListener("click", () => {
  nextImage("prev");
})

function nextImage(direction) {
    if(direction === "next") {
            index++;
        if(index === totalImages) {
            index = 0;
        }
    } 
    else {
        if(index === 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    for(let i = 0; i < images.length; i++) {
        images[i].classList.remove("main");
    }

    images[index].classList.add("main");
}