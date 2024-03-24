type Skill =
    | 'HTML'
    | 'CSS'
    | 'Sass'
    | 'Tailwind'
    | 'JavaScript'
    | 'TypeScript'
    | 'Vue'
    | 'Vue Router'
    | 'Pinia'
    | 'Nuxt'
    | 'Vite'
    | 'Git'
    | 'ESLint'
    | 'Prettier'

interface Contacts {
    phone: Contact
    mail: Contact
    telegram: Contact
    address: Contact
}

interface Contact {
    text: string
    href: string
}

interface LangOptions {
    ru: LangOption
    en: LangOption
}

interface LangOption {
    name: string
    speciality: string
    stackTitle: string
    expirience: {
        title: string
        text: string
    },
    contacts: {
        title: string,
        list: {
            phone: string
            mail: string
            telegram: string
            address: string
        }
    }
}

export type { Skill, Contacts, LangOptions }
