import React from "react";

export const TranslationContext = React.createContext();

export const translations = {
    en: {
        headerTitle: 'Bactericidal air recirculator',
        headerSubTitle: 'Clean air without problems',
        sectionDescTitle: 'Principle of operation',
        sectionDescText: [
            'You just need to turn it on and go about your business without leaving the room: thanks to the operation of the fans, the air enters the air purifier and is cleaned of dust, bacteria and microbes.',
            'Air disinfection is carried out by irradiating the air flow with ultraviolet light with a wavelength of 254 nm.',
            'Guaranteed degree of air disinfection is up to 99%. The air purifier protects not only from COVID-19, various allergens, fungi, but also reduces the risk of contracting colds and viral diseases.'
        ],
        mainMenu: ['Description', 'Scheme', 'Advantages', 'Models', 'Parameters', 'Applications', 'Contacts'],
        sectionSchemeTitle: 'Air Purifier scheme',
        sectionAdvantagesTitle: 'ADVANTAGES OF AIR PURIFIER',
        sectionAdvantages: [
            { title: 'OWN FULL CYCLE PRODUCTION', text: 'We have been manufacturing electronic ballasts for ultraviolet lamps since 2001 and now, using our knowledge and experience in this area, we release a “conscious” product.' },
            { title: 'SAFE OPERATION', text: 'Closed-type air purifier. It is used in rooms where there are people, pets, houseplants.' },
            { title: 'DOUBLE DUST CLEANING', text: 'The inlet airflow is double filtered with a Dust filter and a HEPA filter.' },
            { title: 'TECHNOLOGICAL AND DESIGN SOLUTION', text: 'Formation of effective air circulation in the room. The air in-take takes place from the bottom of the device through the side openings, and the air outlet in the upper part is made in such a way that dust does not accumulate in the air duct. Due to this organization of work, there is no dust emission when the device is turned on. ' },
            { title: 'MOBILITY', text: 'You can easily move your air purifier from one room to another using the wheels included in the kit. Do you want your air purifier to hang on the wall? NO PROBLEM! Wall mount kit included.' },
            { title: 'ADAPTED MODEL RANGE', text: 'For the dimensions of each room: productivity from 100 to 300 m³/h. disinfected area from 40 to 120 m2. Variants of purifiers operation control from classic push-button to touch display.' },
            { title: 'CONTENTS OF DELIVERY', text: ['Additional filter;', 'Wheels;', 'Wall mount kit fasteners;', 'Operation and maintenance manual.'] },
            { title: 'CONVENIENT INTERFACE', text: ['Two-speed fan operation: “day - night”.', 'The minimum noise level is set using the “Night mode” button.', 'The presence of a light indicator that warns about the timing of lamp replacement and replacement filter.'] }
        ],
        sectionIndividulityTitle: 'INDIVIDUALITY',
        sectionIndividulityText: 'The ability to apply a design / logo on the air purifier body, as well as change the color of the body itself, which allows you to form a single image of the com-pany, a positive image and brand recognition.',
        sectionModelsTitle: 'MODEL RANGE',
        sectionModels: [
            { title: 'Standart', control: 'Push-button control', models: [{ productivity: 'Productivity 100 m3/h (Disinfected area 40 m2)', lamps: 'Lamps 2 х HNS L36W 2G11' }, { productivity: 'Productivity 200 m3/h (Disinfected area 80 m2)', lamps: 'Lamps 2 х HNS L55W 2G11' }, { productivity: 'Productivity 300 m3/h (Disinfected area 120 m2)', lamps: 'Lamps 2 х HNS L95W 2G11' }] },
            { title: 'Advance', control: 'Control: display', models: [{ productivity: 'Productivity 100 m3/h (Disinfected area 40 m2)', lamps: 'Lamps 2 х HNS L36W 2G11' }, { productivity: 'Productivity 200 m3/h (Disinfected area 80 m2)', lamps: 'Lamps 2 х HNS L55W 2G11' }, { productivity: 'Productivity 300 m3/h (Disinfected area 120 m2)', lamps: 'Lamps 2 х HNS L95W 2G11' }] },
            { title: 'Smart', control: 'Control: display and Smart Home app', models: [{ productivity: 'Productivity 100 m3/h (Disinfected area 40 m2)', lamps: 'Lamps 2 х HNS L36W 2G11' }, { productivity: 'Productivity 200 m3/h (Disinfected area 80 m2)', lamps: 'Lamps 2 х HNS L55W 2G11' }, { productivity: 'Productivity 300 m3/h (Disinfected area 120 m2)', lamps: 'Lamps 2 х HNS L95W 2G11' }] }
        ],
        sectionParamTitle: 'TECHNICAL SPECIFICATIONS',
        sectionParamSubTitle: 'depending on the model',
        sectionParamSpecifications: [
            { title: 'Productivity (disinfected area)', value: '100 m3/h (40 m2) /200 m3/h (80 m2) /300 m3/h (120 m2)' },
            { title: 'Lamps work up to', value: '9000 hours' },
            { title: 'Noise during operation', value: '37 dB' },
            { title: 'Power consumption', value: '85 W/ 120 W /200 W' },
            { title: 'Control', value: 'push-button / display / Smart' },
            { title: 'Electric shock protection class', value: 'I' },
            { title: 'Dimensions (H x W x D)', value: '800х360х180 /930х360х180/930х360х180' },
            { title: 'Degree of protection against dust and moisture', value: 'IP20' },
            { title: 'Weight, kg, no more', value: '8 / 9/ 9' }
        ]
    },
    ru: {
        headerTitle: 'Бактерицидный рециркулятор',
        headerSubTitle: 'Чистый воздух без проблем',
        sectionDescTitle: 'Принцип работы',
        sectionDescSubTitle: 'Рециркулятор бактерицидный "Название" разработан в соответсвии с Руководством Р 3.5.1904–04 «Использование ультрафиолетового бактерицидного излучения для обеззараживания воздуха в помещениях» НИИ дезинфектологии Минздрава России',
        sectionDescText: [
            'Достаточно просто включить и занимайтесь своими делами, не выходя из помещения: воздух благодаря работе вентиляторов поступает в рециркулятор и происходит его очисткаот пыли, бактерий и микробов.',
            'Обеззараживание воздуха осуществляется за счет облучения воздушного потока ультрафиолетовым светом с длиной волны 254 нм.',
            'Гарантированная степень обеззараживания воздуха до 99%. Рециркулятор защищает не только от COVID-19, различных аллергенов, грибков, а также снижает риск заражения простудными и вирусными заболеваниями.'
        ],
        mainMenu: ['Описание', 'Схема', 'Преимущества', 'Модели', 'Технические характеристики', 'Сферы применения', 'Контакты'],
        sectionSchemeTitle: 'Схема рециркулятора',
        sectionAdvantagesTitle: 'Преимущества',
        sectionAdvantages: [
            { title: 'БЕЗОПАСНАЯ ЭКСПЛУАТАЦИЯ', text: 'Рециркулятор закрытого типа. Используется в помещениях, где находятся люди, домашние питомцы, комнатные растения.' },
            { title: 'СОБСТВЕННОЕ ПРОИЗВОДСТВО ПОЛНОГО ЦИКЛА', text: 'Мы разработали, и являемся поставщиком следующего оборудования: - транспортные световые линии вагонов метро, трамваев, троллейбусов, электро- и дизель-поездов; - источники питания для светодиодов; - светильники с ЭПРА для наружного и внутреннего освещения; - светильники с ЭПРА для тепличного освещения.' },
            { title: 'ДВОЙНАЯ ОЧИСТКА ОТ ПЫЛИ', text: 'Воздушный поток на входе подвергается двойной фильтрации с помощью пылевого фильтра и HEPA фильтра.' },
            { title: 'ТЕХНОЛОГИЧЕСКОЕ И ДИЗАЙНЕРСКОЕ РЕШЕНИЕ', text: 'Формирование эффективной циркуляции воздуха в помещении. Забор воздуха происходит снизу устройства через боковые отверстия, а выход воздуха в верхней части сделан с таким учетом, чтобы в воздуховоде не скапливалась пыль. За счет такой организации работы нет выброса пыли при включении устройства.' },
            { title: 'МОБИЛЬНОСТЬ', text: 'Вы с легкостью можете перемещать ваш рециркулятор с одного помещения в другое с помощью колесиков, которые входят в комплект. Хотите, чтобы рециркулятор висел на стене? Без проблем! В комплект входит набор для настенного крепления.' },
            { title: 'АДАПТИРОВАННЫЙ МОДЕЛЬНЫЙ РЯД', text: 'Под габариты каждого помещения: производительность от 100 до 300 м³/ч. обеззараживаемая площадь от 40 до 120 м2. Варианты управления работой рециркуляторов от классического кнопочного до сенсорного дисплея.' },
            { title: 'КОМПЛЕКТ ПОСТАВКИ', text: ['Дополнительный фильтр;', 'Колесики;', 'Комплект для настенного крепления;', 'Инструкция по эксплуатации и oбслуживанию.'] },
            { title: 'УДОБНЫЙ ИНТЕРФЕЙС', text: ['Двухскоростной режим работы вентиляторов: «день – ночь».', 'Минимальный уровень шума устанавливается с помощью кнопки «Ночной режим».', 'Наличие светового индикатора, который предупреждает о сроке замены ламп и замене фильтра.'] }
        ],
        sectionIndividulityTitle: 'ИНДИВИДУАЛЬНОСТЬ',
        sectionIndividulityText: 'Возможность нанесения дизайна/логотипа на корпусе рециркулятора, а также изменения цвета самого корпуса, что позволяет формировать единый образ компании, положительный имидж и узнаваемость торговой марки.',
        sectionModelsTitle: 'МОДЕЛЬНЫЙ РЯД',
        sectionModels: [
            { title: 'Категория Standart', control: 'Управление: кнопочное', models: [{ productivity: 'Производительность 100 м3/ч (Обеззараживаемая площадь 40 м2)', lamps: 'Лампы 2 х HNS L36W 2G11' }, { productivity: 'Производительность 200 м3/ч (Обеззараживаемая площадь 80 м2)', lamps: 'Лампы 2 х HNS L55W 2G11' }, { productivity: 'Производительность 300 м3/ч (Обеззараживаемая площадь 120 м2)', lamps: 'Лампы 2 х HNS L95W 2G11' }] },
            { title: 'Категория Advance', control: 'Управление: дисплей', models: [{ productivity: 'Производительность 100 м3/ч (Обеззараживаемая площадь 40 м2)', lamps: 'Лампы 2 х HNS L36W 2G11' }, { productivity: 'Производительность 200 м3/ч (Обеззараживаемая площадь 80 м2)', lamps: 'Лампы 2 х HNS L55W 2G11' }, { productivity: 'Производительность 300 м3/ч (Обеззараживаемая площадь 120 м2)', lamps: 'Лампы 2 х HNS L95W 2G11' }] },
            { title: 'Категория Smart', control: 'Управление: дисплей и приложение Smart', models: [{ productivity: 'Производительность 100 м3/ч (Обеззараживаемая площадь 40 м2)', lamps: 'Лампы 2 х HNS L36W 2G11' }, { productivity: 'Производительность 200 м3/ч (Обеззараживаемая площадь 80 м2)', lamps: 'Лампы 2 х HNS L55W 2G11' }, { productivity: 'Производительность 300 м3/ч (Обеззараживаемая площадь 120 м2)', lamps: 'Лампы 2 х HNS L95W 2G11' }] },
        ],
        sectionParamTitle: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
        sectionParamSubTitle: 'в зависимости от модели',
        sectionParamSpecifications: [
            { title: 'Производительность (обеззараживаемая площадь)', value: '100м3/ч (40 м2) /200 м3/ч (80 м2) /300 м3/ч (120 м2)' },
            { title: 'Работа лампы', value: 'до 9000 ч.' },
            { title: 'Шум при работе', value: '37 дБ' },
            { title: 'Потребляемая мощность', value: '85 Вт /120 Вт /200 Вт' },
            { title: 'Управление', value: 'кнопочное/дисплей/Smart' },
            { title: 'Степень защиты от пыли и влаги', value: 'IP20' },
            { title: 'Класс защиты от поражения электрическим током', value: 'I' },
            { title: 'Габриты (ВхШхГ, мм)', value: '800х360х180 /930х360х180/930х360х180' },
            { title: 'Вес, кг, не более', value: '8 / 9/ 9' }
        ]
    },
};