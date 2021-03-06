(function () {
  const mediaQuery = window.matchMedia('(max-width: 660px)');

  if (mediaQuery.matches) {
    const clientImg = [{ img: "/img/tinkoff.png", alt: "tinkoff" }, { img: "/img/gazprom.png", alt: "gazprom" }, { img: "/img/mu.png", alt: "mu" }, { img: "/img/hermitage.png", alt: "hermitage" }, { img: "/img/moleskine.png", alt: "moleskine" }, { img: "/img/starbucks.png", alt: "starbucks" }, { img: "/img/audi.png", alt: "audi" }, { img: "/img/adidas.png", alt: "adidas" }, { img: "/img/ginzaproject.png", alt: "ginzaproject" }, { img: "/img/oscar.png", alt: "oscar" }, { img: "/img/alfabank.png", alt: "alfabank" }, { img: "/img/showtime.png", alt: "showtime" },];
    const img = document.querySelector('.clients__img-mobile');

    let currentItem = 0;
    window.addEventListener("DOMContentLoaded", function () {
      const item = clientImg[currentItem];
      console.log(item);
      img.src = item.img;
    });

    function showPerson(icon) {
      const item = clientImg[icon];
      img.src = item.img;
      img.alt = item.alt;
    };

    function nextInterval() {
      currentItem--;
      if (currentItem < 0) {
        currentItem = clientImg.length - 1;
      }
      showPerson(currentItem);
    };

    window.setInterval(function () {
      nextInterval()
    }, 1000);
  }
})();