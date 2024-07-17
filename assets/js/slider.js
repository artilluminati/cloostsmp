const aboutSliderCards = document.querySelectorAll(".about-slider__card");
const historySliderCards = document.querySelectorAll(
    ".history__slider-element"
);
const historySliderDots = document.querySelectorAll(".slider-dot-dark");
const aboutSliderProgressbar = document.querySelector(
    ".about-slider__progressbar"
);
const modGuideCards = document.querySelectorAll(".mods__tab-content");
const modGuideTabs = document.querySelectorAll(".mods__guide-tabs .btn-tab");

const modInfoCards = document.querySelectorAll(".mod-info__card");
const modInfoTabs = document.querySelectorAll(".mod-info__tabs .btn-tab");

var aboutSlideNum = 0;
var historySlideNum = 0;
var aboutTimeout;

async function aboutToSlide() {
    console.log("klog");
    aboutTimeout = window.setInterval(() => {
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
    }, 4000);
}

function aboutNextSlide() {
    console.log("next");
    window.clearInterval(aboutTimeout);
    aboutToSlide();
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

ModGuideTabSelect = (targetTab) => {
    modGuideCards.forEach((card) => {
        card.style = `transform: translateX(-${targetTab * 100}%)`;
        card.classList.remove("modsCardAnimation");
    });
    modGuideCards[targetTab].classList.add("modsCardAnimation");
    modGuideTabs.forEach((tab) => {
        tab.classList.remove("btn-tab-active");
    });
    modGuideTabs[targetTab].classList.add("btn-tab-active");
};

ModTabSelect = (targetTab) => {
    modInfoCards.forEach((card) => {
        card.style = `transform: translateX(-${targetTab * 100}%)`;
        card.classList.remove("modsCardAnimation");
    });
    modInfoCards[targetTab].classList.add("modsCardAnimation");
    modInfoTabs.forEach((tab) => {
        tab.classList.remove("btn-tab-active");
    });
    modInfoTabs[targetTab].classList.add("btn-tab-active");
};

document.addEventListener("DOMContentLoaded", () => {
    aboutToSlide();
    historySliderCards.forEach((card) => {
        card.style = `transform: translateY(0px)`;
    });
});
