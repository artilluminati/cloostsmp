const aboutSliderCards = document.querySelectorAll(".about-slider__card");
const historySliderCards = document.querySelectorAll(
    ".history__slider-element"
);
const historySliderDots = document.querySelectorAll(".slider-dot-dark");
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
        aboutSliderCards.forEach((card) => {
            card.style = `transform: translateX(-${aboutSlideNum * 100}%)`;
        });
        aboutSliderProgressbar.classList.add(
            "about-slider__progressbar-animation"
        );

        aboutToSlide(aboutSlideNum);
    }, 4000);
}
const HistorySlideTo = (num) => {
    historySlideNum = num;
    historySliderDots.forEach((dot) => {
        dot.classList.remove("slider-dot-active");
    });
    historySliderDots[historySlideNum].classList.add("slider-dot-active");
    historySliderCards.forEach((card) => {
        card.style = `transform: translateY(-${historySlideNum * 100}%)`;
    });
};

const HistoryNextSlide = () => {
    historySlideNum++;
    if (historySlideNum > historySliderCards.length - 1) {
        historySlideNum = 0;
    }
    historySliderDots.forEach((dot) => {
        dot.classList.remove("slider-dot-active");
    });
    historySliderDots[historySlideNum].classList.add("slider-dot-active");
    historySliderCards.forEach((card) => {
        card.style = `transform: translateY(-${historySlideNum * 100}%)`;
    });
};

const HistoryPrevSlide = () => {
    historySlideNum--;
    if (historySlideNum < 0) {
        historySlideNum = historySliderCards.length - 1;
    }
    historySliderDots.forEach((dot) => {
        dot.classList.remove("slider-dot-active");
    });
    historySliderDots[historySlideNum].classList.add("slider-dot-active");
    historySliderCards.forEach((card) => {
        card.style = `transform: translateY(-${historySlideNum * 100}%)`;
    });
};

function aboutNextSlide() {
    window.clearTimeout(aboutTimeout);
    aboutToSlide();
}

document.addEventListener("DOMContentLoaded", () => {
    aboutToSlide();
    historySliderCards.forEach((card) => {
        card.style = `transform: translateY(0px)`;
    });
});
