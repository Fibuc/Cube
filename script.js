const numberOfImagePortfolio = 25

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let scrollTrigger = windowHeight / 4;
    let pipeRight = document.querySelector(".pipe-right");
    let pipeLeft = document.querySelector(".pipe-left");

    if (scrollPosition > scrollTrigger) {
        let offset = (scrollPosition - scrollTrigger) * 0.1;
        document.body.style.backgroundPosition = `center ${-offset}px`;
        
        let pipeoffset = (scrollPosition - scrollTrigger) * 1.4;
        pipeRight.style.top = `${-pipeoffset}px`;
        pipeRight.style.opacity = 1
        pipeLeft.style.opacity = 1
        pipeLeft.style.top = `${-pipeoffset}px`;
    } else {
        document.body.style.backgroundPosition = 'center top';
    }
});


document.getElementById("transition-link").addEventListener("click", function(event) {
    event.preventDefault();
    let door1 = document.querySelector(".transition-block-door-1");
    let door2 = document.querySelector(".transition-block-door-2");
    // let audio = new Audio("src/sounds/elevator.wav")

    door1.classList.add("slide-in");
    door2.classList.add("slide-out");

    audio.play();


    setTimeout(() => {
        window.location.href = this.href;
    }, 2000);
});


const swiper = new Swiper('.swiper', {
    loop: false,
    grabCursor: true,
    spaceBetween: 50,
    speed: 1000,
  
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

const swiperWrapper = document.querySelector(".swiper-wrapper")

for (let i = 1; i <= numberOfImagePortfolio; i++) {
    let img = new Image()
    img.src = `src/images/portfolio/portfolio${i}.png`
    console.log(swiperWrapper)
    img.onload = () => {
        let slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        let imageElement = document.createElement('img')
        imageElement.src = img.src
        slide.appendChild(imageElement)
        swiperWrapper.appendChild(slide)
    }
}
