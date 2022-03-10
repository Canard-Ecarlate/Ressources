i18next.init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
        en: {
            translation: {
                "title": "DuckCity - Who has the bomb ?",
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
                "parc-section-main-text": "But all is not lost! The Indigo Anti-Terrorist Ducks (CIAT) will do everything they can to defuse this bomb and save the city! But beware, the Scarlet Ducks won't let them: they have infiltrated the team and will sabotage the defusing.",
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
        },
        fr: {
            translation: {
                "title": "CanardÉcarlate - Qui possède la bombe ?",
                "website-title": "CanardÉcarlate",
                "menu-title": "Menu",
                "language-button": "Langue",
                "language-menu-button-mobile": "Langue :",
                "french-button": "🇫🇷 Français",
                "english-button": "🇬🇧 English",
                "coin-button": "🦆 Coin",
                "french-mobile-button": "🇫🇷 Français",
                "english-mobile-button": "🇬🇧 English",
                "coin-mobile-button": "🦆 Coin",
                "main-menu-about-link": "A propos",
                "main-title": "La ville est en danger !",
                "main-sub-title": "Ne laissez pas la ville exploser, aidez votre équipe à désamorcer la bombe aussi vite que possible !",
                "main-button": "Bientôt !",
                "navAction": "Bientôt!",
                "voice-section-main-title": "Faîtes entendre votre COIN !",
                "voice-section-title": "Nos canards ont besoin de votre voix !",
                "voice-section-main-text": "Remplissez notre formulaire et envoyez nous vos meilleurs enregistrements de canards !",
                "voice-section-button": "Je souhaite participer !",
                "screen-section-main-title": "Une bombe a été placée dans DuckCity !",
                "parc-section-title": "La terrible mafia, les canards écarlates sont en train de nous attaquer !",
                "parc-section-main-text": "Mais tout n'est pas perdu ! Les Canards Indigo Anti-Terrorist (CIAT) feront tout leur possible pour désamorcer la bombe et sauver la ville ! Mais attention, les canards écarlate ne les laisseront pas faire, ils ont infiltré le groupe et tentent de saboter le désamorçage.",
                "bar-section-title": "Soyez vigilant!",
                "bar-section-main-text": "Derrière les faux semblants et les belles paroles se cachent peut-être un Canard Écarlate prêt à tout faire sauter !",
                "footer-title": "Tenez vous prêts !",
                "footer-subtitle": "Notre jeu sera bientôt disponible !",
                "website-title-footer": "CanardÉcarlate",
                "link-footer": "Liens",
                "faq-link-footer": "FAQ",
                "help-link-footer": "Aide",
                "support-link-footer": "Support",
                "legal-footer": "Légal",
                "legal-link-footer": "Conditions d'utilisations",
                "privacy-link-footer": "Politique de confidentialité",
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
