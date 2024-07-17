const headerMenu = document.querySelector(".header-menu");

function MenuToggle() {
    headerMenu.classList.toggle("menuOpened");
}

function CopyAdress(elem) {
    var copyText = elem.querySelector(".ip-adress__content input");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    elem.classList.add("ip-adress__copied");

    elem.addEventListener("mouseleave", () => {
        elem.classList.remove("ip-adress__copied");
    });
}

function SetSliderHeights() {
    document.querySelector(".history__slider-wrapper").style.height = `100%`;

    if (window.matchMedia("(min-width: 765px)").matches) {
        const maxSliderTextHeight =
            document.querySelectorAll(".photo-slider__img img")[0]
                .offsetHeight - 112;

        document.querySelectorAll(".history__info-text").forEach((card) => {
            card.style.maxHeight = `${maxSliderTextHeight}px`;
        });
    } else {
        const maxSliderTextHeight = document.querySelectorAll(
            ".photo-slider__img img"
        )[0].offsetHeight;

        document.querySelectorAll(".history__info-text").forEach((card) => {
            card.style.maxHeight = `${maxSliderTextHeight}px`;
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

function SetBannerVideo() {
    if (window.matchMedia("(min-width: 765px)").matches) {
        document.querySelector(".banner__bg-layer").innerHTML = `<video
        src="assets/media/video/banner-bg-shader-video.mp4"
        autoplay
        muted
        loop
    ></video>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    SetBannerVideo();
    SetSliderHeights();
    document.querySelectorAll(".ip-adress__input input").forEach((elem) => {
        elem.size = elem.value.length - 5;
    });
});
visualViewport.addEventListener("resize", () => {
    SetBannerVideo();
    SetSliderHeights();
});

const tabs = document.querySelector(".mod-info__tabs");
let isDown = false;
let startX;
let scrollLeft;

tabs.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - tabs.offsetLeft;
    scrollLeft = tabs.scrollLeft;
});
tabs.addEventListener("mouseleave", () => {
    isDown = false;
});
tabs.addEventListener("mouseup", () => {
    isDown = false;
    tabs.style.cursor = "default";
});
tabs.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    tabs.style.cursor = "grab";
    const x = e.pageX - tabs.offsetLeft;
    const walk = (x - startX) * 1.5; // скорость прокрутки
    tabs.scrollLeft = scrollLeft - walk;
});

const btnTabs = document.querySelectorAll(".btn-tab");

btnTabs.forEach((btn) => {
    btn.addEventListener("dragstart", () => {
        btn.style.cursor = "grabbing";
    });

    btn.addEventListener("dragend", () => {
        btn.style.cursor = "pointer";
    });
});
