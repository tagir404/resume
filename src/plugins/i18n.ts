import { createI18n } from 'vue-i18n'

export default createI18n({
    legacy: false,
    locale: 'ru',
    messages: {
        ru: {
            name: 'Тагир Сулаев',
            speciality: 'Фронтенд разработчик',
            stackTitle: 'Мой стек:',
            expirience: {
                title: 'О моем опыте:',
                text: 'Мой путь в веб разработке начался в 2021 году, тогда я начал работать на фрилансе в качестве HTML-верстальщика. Поработав так около полугода, я решил найти работу постабильнее и после длительных поисков попал на стажировку в компанию <a href="https://procontext.ru/" target="_blank" >ПроКонтекст</a>, в которой проработал два года на позиции Фронтенд-разработчика.</p>'
            },
            contacts: {
                title: 'Контакты:',
                address: {
                    title: 'Адрес',
                    text: 'Россия, Махачкала'
                },
                phone: {
                    title: 'Телефон',
                },
                email: {
                    title: 'Почта'
                },
                telegram: {
                    title: 'Телеграм'
                }
            }
        },
        en: {
            name: 'Tagir Sulaev',
            speciality: 'Frontend Developer',
            stackTitle: 'My stack:',
            expirience: {
                title: 'About my experience:',
                text: 'My journey in web development began in 2021, then I started working as a freelancer as an HTML layout designer. After working like this for about six months, I decided to find a more stable job and after a long search, I got an internship at the <a href="https://procontext.ru/" target="_blank" >ProContext</a> company, where I worked for two years as a Frontend Developer.'
            },
            contacts: {
                title: 'Contacts:',
                address: {
                    title: 'Address',
                    text: 'Russia, Makhachkala'
                },
                phone: {
                    title: 'Phone',
                },
                email: {
                    title: 'Email'
                },
                telegram: {
                    title: 'Telegram'
                }
            }
        }
    }
})