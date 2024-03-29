let scrollpos = window.scrollY;
const header = document.getElementById("header");
const navcontent = document.getElementById("nav-content");
const navaction = document.getElementById("navAction");
const brandname = document.getElementById("brandname");
const navToggle = document.getElementById("nav-toggle");
const languageMenu = document.getElementById("language-menu-button");
const menuAboutLink = document.getElementById("main-menu-about-link");

const toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {
    /*Apply classes for slide in bar*/
    scrollpos = window.scrollY;

    if (scrollpos > 10) {
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white");
        //Use to switch toggleColour colours
        for (let i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        languageMenu.classList.add("text-black");
        navToggle.classList.add("text-black");
        navcontent.classList.add("bg-white");
        menuAboutLink.classList.add("lg:text-black");
    } else {
        header.classList.remove("bg-white");
        navToggle.classList.remove("text-black");
        languageMenu.classList.remove("text-black");
        menuAboutLink.classList.remove("lg:text-black");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800");
        //Use to switch toggleColour colours
        for (let i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
        }

        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
    }
});