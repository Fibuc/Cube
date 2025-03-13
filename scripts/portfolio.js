const swiperWrapper = document.querySelector(".swiper-wrapper")

// Configuration of the portfolio swiper.
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 50,
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      colorBullets: 'red',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });


// Add picture on portfolio.
for (let i = 1; i <= numberOfImagePortfolio; i++) {
    let img = new Image()
    img.src = `src/images/portfolio/portfolio${i}.jpg`
    img.onload = () => {
        let slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        let imageElement = document.createElement('img')
        imageElement.src = img.src
        slide.appendChild(imageElement)
        swiperWrapper.appendChild(slide)
    };
}
