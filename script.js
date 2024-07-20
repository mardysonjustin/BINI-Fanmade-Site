const carousel = document.querySelector(".carousel");
firstImg = document.querySelectorAll("img")[0];
sliderIcons= document.querySelectorAll(".wrapper ion-icon");

let isDrag = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 15;
const scrollAmount = firstImgWidth * 2.9;

sliderIcons.forEach(icon => { 
    icon.addEventListener("click",() => {
        carousel.scrollLeft += icon.id == "prev2" ? -firstImgWidth : firstImgWidth;
    })
});

const dragStart = (e) => {  //updating global vars when mouse down event
    isDrag = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging= (e) => {   // scrolling images to left depending on mouse pointer
    if(!isDrag) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let posDif = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - posDif;
}

const dragStop = () => {
    isDrag = false;
    carousel.classList.remove("dragging");
}

sliderIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollTo({
            left: icon.id == "prev2" ? carousel.scrollLeft - scrollAmount : carousel.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    });
});
carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop)