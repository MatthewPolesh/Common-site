/* let myVar = "hellow, everyone!";

const myArray = [1,2,3,4,5,6];

let summ = 0;

myArray.forEach((item) => {  Объявление функций для массивов 
    summ += item;
})

 */

const MENU_LINKS = document.querySelectorAll(".header__menu-link");

MENU_LINKS.forEach((link) => link.addEventListener('click', event => {
    event.preventDefault(); 

    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({
        behavior: "smooth"
    })
}))

const HERO__DOTS = document.querySelectorAll('.hero__dot');
const HERO__IMAGE = document.querySelector('.hero__image');
const HERO__TITLE = document.querySelector('.hero__title');
const HERO__SUBTITLE = document.querySelector('.hero__subtitle')
const HERO__TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];
const HERO__SUBTITLES = [
    "Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток",
    "K любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно",
    "Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов"
];


HERO__DOTS.forEach((dot, index) => dot.addEventListener('click', () => {
    HERO__DOTS.forEach(el =>{
        el.classList.remove('active');
    })

    dot.classList.add('active');

    HERO__IMAGE.src = `Assets/Hero_${index+1}.jpg`;

    HERO__TITLE.textContent = HERO__TITLES[index];
    HERO__SUBTITLE.textContent = HERO__SUBTITLES[index];
}))


const FEATURES__TITLES =  document.querySelectorAll('.features__item-title');
const FEATURE__CAPTION = document.querySelector('.features__item-caption');
const FEATURES__CAPTIONS = [
    "Создаем кастомизированные программы и сервисы для развития управленческих команд в российских и международных компаниях",
    "Помогаем руководителям и командам колл-центров создать полный цикл по поддержке клиентов и организовать контроль качества",
    "Разрабатываем локальные защищенные корпоративные хранилища, a также осуществляем поддержку на протяжении всего времени пользования"
];

FEATURES__TITLES.forEach((title,index) => title.addEventListener('click', () =>{
    FEATURES__TITLES.forEach(el =>{
        el.classList.remove('active');
    })
    
    title.classList.add('active');

    FEATURE__CAPTION.textContent = FEATURES__CAPTIONS[index];
}))