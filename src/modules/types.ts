interface Skill {
    name: string
    icon: string
}

interface Contact {
    title: string
    link: {
        text: string
        href: string
    }
}

export type { Skill, Contact }
