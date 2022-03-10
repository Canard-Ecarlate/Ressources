i18next.init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
        en: {
            translation: {
                "title": "hello world",
                "website-title" : "Duck-city",
                "menu-title" : "Menu",
                "language-menu-button" : "Language",
                "language-menu-button-mobile" : "Language :",
            }
        },
        fr: {
            translation: {
                "title": "Bonjour",
                "website-title" : "Canard Ecarlate",
                "menu-title" : "Menu",
                "language-menu-button" : "Langue",
                "language-menu-button-mobile" : "Langue :",
            }
        }
    }
});

const toTranslateList = document.getElementsByClassName("translate");
for (let i=0; i<toTranslateList.length; i++) {
    toTranslateList[i].innerHTML = i18next.t(toTranslateList[i].id);
}

const dropdownButton = document.querySelector("#language-menu-button");
const dropdownList = document.querySelector("#language-dropdown");
const frenchButton = document.querySelector("#french-button");
const englishButton = document.querySelector("#english-button");
const coinButton = document.querySelector("#coin-button");
const frenchMobileButton = document.querySelector("#french-mobile-button");
const englishMobileButton = document.querySelector("#english-mobile-button");
const coinMobileButton = document.querySelector("#coin-mobile-button");

dropdownButton.addEventListener("click", () => {
    dropdownList.classList.toggle("hidden");
});

function changeLanguage(newLanguage) {
    i18next.changeLanguage(newLanguage, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        for (let i = 0; i < toTranslateList.length; i++) {
            toTranslateList[i].innerHTML = i18next.t(toTranslateList[i].id);
        }
        dropdownList.classList.toggle("hidden");
    });
}

frenchButton.addEventListener("click", () => {
    changeLanguage('fr');
});

englishButton.addEventListener("click", () => {
    changeLanguage('en');
});

coinButton.addEventListener("click", () => {
    changeLanguage('duck');
});
frenchMobileButton.addEventListener("click", () => {
    changeLanguage('fr');
});

englishMobileButton.addEventListener("click", () => {
    changeLanguage('en');
});

coinMobileButton.addEventListener("click", () => {
    changeLanguage('duck');
});
