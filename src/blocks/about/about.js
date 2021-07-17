const abuotItem = [
  {
    img: "/img/analitics.png",
    title: 'Аналитика',
    description: "Консалтинг и аудит сайтов. Увеличим конверсию сайта компании, эффективность последующих рекламных кампаний за счет выявления и устранения технических и маркетинговых ошибок.",
  },
  {
    img: "/img/chess.png",
    title: 'Стратегия',
    description: "Мы объединяем стратегическое мышление с дизайном для создания эффективной коммуникации с вашим брендом в онлайн-среде. Разработаем коммуникационные, медиа- и digital-стратегии. Составим план развития на год вперед.",
  },
  {
    img: "/img/megaphone.png",
    title: 'SMM',
    description: "Разрабатываем стратегию присутствия в new медиа, активации в социальных сетях, создаем контент-планы, обеспечиваем коммьюнити-менеджмент, работаем с блогерами, внедряем Social CRM, интегрируем банковский сервис в Facebook.",
  },
  {
    img: "/img/mon.png",
    title: 'Технологии и продакшн',
    description: "Проектируем и разрабатываем корпоративные сайты на платформе 1С-Битрикс, мобильные приложения, веб-интерфейсы, в том числе интернет-банкинг и личные кабинеты. Обеспечиваем поддержку 24/7 и дальнейшее развитие вашего интернет-пространства.",
  },
  {
    img: "/img/pencil.png",
    title: 'Дизайн',
    description: "Разработка дизайна любого уровня и сложности: адаптивный дизайн, дизайн мобильных приложений, создание UI Framework c возможностью дальнейшей миграции на любые платформы.",
  },
];

const listAbout = document.querySelector('.about__list');


function createAboutItem(obj) {
  const itemAbout = document.createElement('li');
  itemAbout.classList.add('about__item');

  const imgAboutItem = document.createElement('img');
  imgAboutItem.classList.add('about__item-img');
  imgAboutItem.setAttribute('src', obj.img);
  itemAbout.appendChild(imgAboutItem);

  const titleAboutItem = document.createElement('h3');
  titleAboutItem.classList.add('about__item-title');
  titleAboutItem.innerHTML = obj.title;
  itemAbout.appendChild(titleAboutItem);

  const descriptionAboutItem = document.createElement('p');
  descriptionAboutItem.classList.add('about__item-discription');
  descriptionAboutItem.innerHTML = obj.description;
  itemAbout.appendChild(descriptionAboutItem);

  listAbout.appendChild(itemAbout);
};


abuotItem.forEach(item => {
  createAboutItem(item);
});