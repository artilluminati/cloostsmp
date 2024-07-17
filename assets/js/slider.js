const aboutSliderCards = document.querySelectorAll(".about-slider__card");
const historySliderCards = document.querySelectorAll(
    ".history__slider-element"
);
const historySliderDots = document.querySelectorAll(".history__slider-dots");
const aboutSliderProgressbar = document.querySelector(
    ".about-slider__progressbar"
);
var aboutSlideNum = 0;
var historySlideNum = 0;
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

const HistoryNextSlide = () => {
    historySlideNum++;
    if (historySlideNum > historySliderCards.length - 1) {
        historySlideNum = 0;
    }
    historySliderDots.forEach((dot) => {
        dot.classList.remove("slider-dot-acitve");
    });
    historySliderDots[historySlideNum].classList.add("slider-dot-acitve");
    historySliderCards.forEach((card) => {
        card.style = `transform: translateY(-${aboutSlideNum * 100}%)`;
    });
};

function aboutNextSlide() {
    window.clearTimeout(aboutTimeout);
    aboutToSlide();
}

document.addEventListener("DOMContentLoaded", () => {
    aboutToSlide();
});
