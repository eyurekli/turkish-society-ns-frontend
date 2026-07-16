const translations = {
  en: {
    logo: "TSNS",
    home: "Home",
    about: "About",
    becomeAMember: "Member",
    events: "Events",
    contact: "Contact",
    welcome: "Welcome",
    search: "Search",
    getStarted: "Get Started",
    learnMore: "Learn More",
    copyright: "© {year} Turkish Society of Nova Scotia"
  },
  tr: {
    logo: "TSNS",
    home: "Ana Sayfa",
    about: "Hakkında",
    becomeAMember: "Üye Ol",
    events: "Etkinlikler",
    contact: "İletişim",
    welcome: "Hoşgeldiniz",
    search: "Ara",
    getStarted: "Başla",
    learnMore: "Daha Fazla",
    copyright: "© {year} Turkish Society of Nova Scotia"
  }
};

const SUPPORTED = ["en", "tr"];

export function detectBrowserLang() {
  if (typeof navigator === "undefined") return "en";
  const nav = navigator.language || navigator.userLanguage || "en";
  if (nav.toLowerCase().startsWith("tr")) return "tr";
  return "en";
}

export function getInitialLang() {
  try {
    const stored = localStorage.getItem("lang");
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch (e) {}
  return detectBrowserLang();
}

export function setLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

export function t(lang, key, vars = {}) {
  const dict = translations[lang] || translations["en"];
  let str = dict[key] || translations["en"][key] || key;
  Object.keys(vars).forEach(k => {
    str = str.replace(new RegExp(`\\{${k}\\}`, "g"), vars[k]);
  });
  return str;
}

export const supported = SUPPORTED;
