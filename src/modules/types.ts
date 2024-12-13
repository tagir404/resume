import type { ComponentOptionsMixin, DefineComponent, ExtractPropTypes, PublicProps } from 'vue'

type SkillList =
    | 'HTML'
    | 'CSS'
    | 'Sass'
    | 'Tailwind'
    | 'PrimeVue'
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

interface Skill {
    icon: DefineComponent<
        {},
        {},
        {},
        {},
        {},
        ComponentOptionsMixin,
        ComponentOptionsMixin,
        {},
        string,
        PublicProps,
        Readonly<ExtractPropTypes<{}>>,
        {},
        {}
    >
    name: SkillList
}

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
