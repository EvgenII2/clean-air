import React from "react";

export const TranslationContext = React.createContext();

export const translations = {
    en: {
        headerTitle: 'Bactericidal air recirculator',
        headerSubTitle: 'Clean air withput problems',
        sectionDescTitle: 'PRINCIPLE OF OPERATION:',
        sectionDescText: [
            'You just need to turn it on and go about your business without leaving the room: thanks to the operation of the fans, the air enters the air purifier and is cleaned of dust, bacteria and microbes.',
            'Air disinfection is carried out by irradiating the air flow with ultraviolet light with a wavelength of 254 nm.',
            'Guaranteed degree of air disinfection is up to 99%. The air purifier protects not only from COVID-19, various allergens, fungi, but also reduces the risk of contracting colds and viral diseases.'
        ],
        mainMenu: ['Description', 'Scheme', 'Advantages', 'Models', 'Parameters', 'Applications', 'Contacts']
    },
    ru: {
        headerTitle: 'Бактерицидный рециркулятор',
        headerSubTitle: 'Чистый воздух без проблем',
        sectionDescTitle: 'ПРИНЦИП РАБОТЫ:',
        sectionDescSubTitle: 'Рециркулятор бактерицидный "Название" разработан в соответсвии с Руководством Р 3.5.1904–04 «Использование ультрафиолетового бактерицидного излучения для обеззараживания воздуха в помещениях» НИИ дезинфектологии Минздрава России',
        sectionDescText: [
            'Достаточно просто включить и занимайтесь своими делами, не выходя из помещения: воздух благодаря работе вентиляторов поступает в рециркулятор и происходит его очисткаот пыли, бактерий и микробов.',
            'Обеззараживание воздуха осуществляется за счет облучения воздушного потока ультрафиолетовым светом с длиной волны 254 нм.',
            'Гарантированная степень обеззараживания воздуха до 99%. Рециркулятор защищает не только от COVID-19, различных аллергенов, грибков, а также снижает риск заражения простудными и вирусными заболеваниями.'
        ],
        mainMenu: ['Описание', 'Схема', 'Преимущества', 'Модели', 'Технические характеристики', 'Сферы применения', 'Контакты']
    },
};