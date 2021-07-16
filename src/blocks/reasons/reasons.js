const listReasons = [
  {
    title: 'Профессионали',
    discription: 'Мы нацелены развить ваш бизнес за счет технических решений, а не просто выполнить техническое задание.',
  },
  {
    title: 'Актуальность решений',
    discription: 'Мы заботимся о том, чтобы ваш продукт оставался актуальным долгие годы, разрабатывая адаптивные и масштабируемые решения.',
  },
  {
    title: 'Победы',
    discription: 'На нашем счету более 30 призовых мест в российских и международных ведущих отраслевых конкурсах веб-разработки.',
  },
  {
    title: 'Прозрачность',
    discription: 'Сроки и бюджет разработки открыты и предсказуемы — мы заботимся об этом еще на этапе подписания договора.',
  },
  {
    title: 'Опыт работы с highload проектами',
    discription: 'Мы разрабатываем веб-сервисы, способные выдерживать высокие нагрузки (до 10000 запросов/сек) и обеспечивать поддержку растущего количества пользователей.',
  },
  {
    title: 'Использование fullstack технологий',
    discription: 'Мы открыты к новым технологиям, понимаем каждую из них и имеем представление о том, как развить веб-приложение от стадии проектирования до готового продукта.',
  },
];

const reasonsList = document.querySelector('.reasons__list');

function createReasonItem(obj) {
  const reasonsItem = document.createElement('li');
  reasonsItem.classList.add('reasons__item');

  const reasonsTitle = document.createElement('h3');
  reasonsTitle.classList.add('reasons__item-title');
  reasonsTitle.innerHTML = obj.title;
  reasonsItem.appendChild(reasonsTitle);

  const reasonsDiscription = document.createElement('p');
  reasonsDiscription.classList.add('reasons__item-discription');
  reasonsDiscription.innerHTML = obj.discription;
  reasonsItem.appendChild(reasonsDiscription);

  reasonsList.appendChild(reasonsItem);
};

listReasons.forEach(item => {
  console.log(item);
  createReasonItem(item);
});