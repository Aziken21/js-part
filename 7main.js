const img = document.querySelector
('.slider__image');
const dots = document.querySelectorAll(".slider__dot");

const imgArr = ['../img/puppy.jpg', '../img/css.jpg', '../img/coding.jpg'];

let currentIndex = 0;

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function nextIndex(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;  
    }

    slide(currentIndex);
}

function slide(index) {
    img.style.display = "none";
    setTimeout(() => {
        img.style.display = "block";
    }, 0);
    
    img.src = imgArr[index];

    updateDots(index);
}

function updateDots() {
    for (let dot of dots) {
        dot.classList.remove("active");
    }

    dots[index].classList.add("active");
}