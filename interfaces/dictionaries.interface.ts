export interface LocaleData {
    "navigation": {
        "home": string,
        "menu": string,
        "about": string,
        "contact": string
    },
    "page": {
        "home": {
            "title": string,
            "subtitle": string,
        }
    }
}

export interface Dictionaries {
    [key: string]: () => Promise<LocaleData>;
  }
