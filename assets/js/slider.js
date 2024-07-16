const aboutSliderCards = document.querySelectorAll(".about-slider__card");
const aboutSliderProgressbar = document.querySelector(
    ".about-slider__progressbar"
);
var aboutSlideNum = 0;
var aboutTimeout;

function aboutToSlide() {
    aboutTimeout = window.setTimeout(() => {
        aboutSlideNum++;
        if (aboutSlideNum > aboutSliderCards.length - 1) {
            aboutSlideNum = 0;
        }

        aboutSliderProgressbar.classList.remove(
            "about-slider__progressbar-animation"
        );
        aboutSliderProgressbar.classList.add(
            "about-slider__progressbar-animation"
        );
        aboutSliderCards.forEach((card) => {
            card.style = `transform: translateX(-${aboutSlideNum * 100}%)`;
        });

        aboutToSlide(aboutSlideNum);
    }, 3000);
}

function aboutNextSlide() {
    window.clearTimeout(aboutTimeout);
    aboutToSlide();
}

document.addEventListener("DOMContentLoaded", () => {
    aboutToSlide();
});
