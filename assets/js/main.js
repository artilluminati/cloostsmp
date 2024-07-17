const headerMenu = document.querySelector(".header-menu");

function MenuToggle() {
    headerMenu.classList.toggle("menuOpened")
}

function SetSliderHeights() {
    document.querySelector(".history__slider-wrapper").style.Height = `100%`;
    const maxSliderTextHeight =
        document.querySelectorAll(".photo-slider__img img")[0].offsetHeight -
        132;

    document.querySelectorAll(".history__info-text").forEach((card) => {
        card.style.maxHeight = `${maxSliderTextHeight}px`;
    });

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
    SetSliderHeights();
});
visualViewport.addEventListener("resize", () => {
    SetSliderHeights();
});
