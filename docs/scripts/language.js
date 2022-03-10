i18next.init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
        en: {
            translation: {
                "title": "hello world",
                "website-title": "Duck-city",
                "menu-title": "Menu",
                "language-button": "Language",
                "language-menu-button-mobile": "Language:",
                "french-button": "🇫🇷 Français",
                "english-button": "🇬🇧 English",
                "coin-button": "🦆 Coin",
                "french-mobile-button": "🇫🇷 Français",
                "english-mobile-button": "🇬🇧 English",
                "coin-mobile-button": "🦆 Coin",
                "main-menu-about-link": "About us",
                "main-title": "The city is in danger!",
                "main-sub-title": "Don't let the city explode, help your team defuse the bomb as quick as possible!",
                "main-button": "Soon!",
                "navAction": "Soon!",
                "voice-section-main-title": "Make your QUACK heard!",
                "voice-section-title": "Our ducks need a new voice!",
                "voice-section-main-text": "Fill out the form and send us your best ducks records!",
                "voice-section-button": "I want to help!",
                "screen-section-main-title": "A bomb has been planted in DuckCity!",
                "parc-section-title": "The terrible mafia, the Scarlet Ducks, is attacking us!",
                "parc-section-main-text": " But all is not lost! The Indigo Anti-Terrorist Ducks (CIAT) will do everything they can to defuse this bomb and save the city! But beware, the Scarlet Ducks won't let them: they have infiltrated the team and will sabotage the defusing.",
                "bar-section-title": "Watch out!",
                "bar-section-main-text": "Behind the pretences and the fine words there may be a Scarlet Duck ready to blow it all up!",
                "footer-title": "Be ready!",
                "footer-subtitle": "Our game will be available soon!",
                "website-title-footer": "DuckCity",
                "link-footer": "Links",
                "faq-link-footer": "FAQ",
                "help-link-footer": "Help",
                "support-link-footer": "Support",
                "legal-footer": "Legal",
                "legal-link-footer": "Terms",
                "privacy-link-footer": "Privacy",
                "social-footer": "Social",
                "github-link-footer": "Github",
                "discord-link-footer": "Discord",
            }
        }
    }
});

const toTranslateList = document.getElementsByClassName("translate");
for (let i = 0; i < toTranslateList.length; i++) {
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
