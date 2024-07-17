const headerMenu = document.querySelector(".header-menu");
var windowWidth = window.innerWidth;

function MenuToggle() {
    headerMenu.classList.toggle("menuOpened");
}

function CopyAdress() {
    var copyText = document.querySelector(".ip-adress__content span");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    document.querySelector(".ip-adress::after").textContent = "Скопировано!";
}

function SetSliderHeights() {
    document.querySelector(".history__slider-wrapper").style.Height = `100%`;
    const maxSliderTextHeight =
        document.querySelectorAll(".photo-slider__img img")[0].offsetHeight -
        132;

    if (windowWidth > 764) {
        document.querySelectorAll(".history__info-text").forEach((card) => {
            card.style.maxHeight = `${maxSliderTextHeight}px`;
        });
    } else {
        document.querySelectorAll(".history__info-text").forEach((card) => {
            card.style.maxHeight = `${maxSliderTextHeight + 56}px`;
        });
    }

    const maxSliderHeight = document.querySelectorAll(
        ".history__slider-element"
    )[0].offsetHeight;

    document.querySelector(".history__slider-wrapper").style.maxHeight = `${
        maxSliderHeight - 1
    }px`;

    document.querySelectorAll(".history__slider-controls").forEach((card) => {
        card.style.maxHeight = `${maxSliderHeight - 26}px`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    windowWidth = window.innerWidth;
    SetSliderHeights();
});
visualViewport.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    SetSliderHeights();
});
