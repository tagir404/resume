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
    | 'Vue I18n'
    | 'Vite'
    | 'Git'
    | 'ESLint'
    | 'Prettier'

interface Contacts {
    phone: Contact
    email: Contact
    telegram: Contact
    address: Contact
}

interface Contact {
    text: string | null
    href: string
}

export type { Skill, Contacts }
