import { createI18n } from 'vue-i18n'

export default createI18n({
    legacy: false,
    locale: 'ru',
    messages: {
        ru: {
            name: 'Тагир Сулаев',
            developer: {
                speciality: 'Фронтенд разработчик',
                stackTitle: 'Мой стек:',
                experience: {
                    title: 'О моем опыте:',
                    text: 'Мой путь в веб разработке начался в 2021 году, тогда я начал работать на фрилансе в качестве HTML-верстальщика. Поработав так около полугода, я решил найти работу постабильнее и после длительных поисков попал на стажировку в компанию <a href="https://procontext.ru" target="_blank" >ПроКонтекст</a>, в которой проработал два года на позиции Фронтенд-разработчика.</p>'
                },
                contacts: {
                    title: 'Контакты:',
                    address: {
                        title: 'Адрес',
                        text: 'Россия, Махачкала'
                    },
                    phone: {
                        title: 'Телефон'
                    },
                    email: {
                        title: 'Почта'
                    },
                    telegram: {
                        title: 'Телеграм'
                    }
                }
            },
            chessplayer: {
                title: 'Шахматист',
                experience: {
                    title: 'О моем опыте:',
                    text: 'Я начал играть в шахматы в 2017 году. С этого времени я успел наиграть более 17 тысяч партий в блиц (3+0) на платформе <a href="https://chess.com" target="_blank" >Chess.com</a>, выучить пару дебютов и достичь неплохого уровня игры. Мой максимальный рейтинг: 1850.'
                },
                accountLinkText: 'Ссылка на мой аккаунт:',
                favoriteMove: 'Любимый первый ход:',
                favoriteOpening: {
                    white: {
                        title: 'Любимый дебют за белых:',
                        text: 'Итальянская партия'
                    },
                    black: {
                        title: 'Любимый дебют за черных:',
                        text: 'Защита Каро – Канн'
                    }
                }
            }
        },
        en: {
            name: 'Tagir Sulaev',
            developer: {
                speciality: 'Frontend Developer',
                stackTitle: 'My stack:',
                experience: {
                    title: 'About my experience:',
                    text: 'My journey in web development began in 2021, then I started working as a freelancer as an HTML layout designer. After working like this for about six months, I decided to find a more stable job and after a long search, I got an internship at the <a href="https://procontext.ru" target="_blank" >ProContext</a> company, where I worked for two years as a Frontend Developer.'
                },
                contacts: {
                    title: 'Contacts:',
                    address: {
                        title: 'Address',
                        text: 'Russia, Makhachkala'
                    },
                    phone: {
                        title: 'Phone'
                    },
                    email: {
                        title: 'Email'
                    },
                    telegram: {
                        title: 'Telegram'
                    }
                }
            },
            chessplayer: {
                title: 'Chess player',
                experience: {
                    title: 'About my experience:',
                    text: 'I started playing chess in 2017. Since that time, I have managed to play more than 17 thousand games of blitz (3+0) on the <a href="https://chess.com" target="_blank" >Chess.com</a> platform, learn a couple of openings and reach a good level of play. My maximum rating: 1850.'
                },
                accountLinkText: 'Link to my account:',
                favoriteMove: 'Favorite first move:',
                favoriteOpening: {
                    white: {
                        title: 'Favorite opening for white:',
                        text: 'Italian Game'
                    },
                    black: {
                        title: 'Favorite opening for black:',
                        text: 'Caro – Kann Defence'
                    }
                }
            }
        }
    }
})
