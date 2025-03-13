const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

let selectedRatioOffset = null

if (windowHeight > quadHDHeight) {
    if (windowWidth < fourKWideWidth) {
        selectedRatioOffset = normal4KOffsetRatio;
    } else if (windowWidth < fourKUltraWideWidth) {
        selectedRatioOffset = wide4KOffsetRatio;
    } else {
        selectedRatioOffset = ultraWide4KOffsetRatio;
    }
} else if (windowHeight > fullHDHeight) {
    if (windowWidth < quadHDWideWidth) {
        selectedRatioOffset = normalQuadHDOffsetRatio;
    } else if (windowWidth < quadHDUltraWideWidth) {
        selectedRatioOffset = wideQuadHDOffsetRatio;
    } else {
        selectedRatioOffset = ultraWideQuadHDOffsetRatio;
    }
} else {
    if (windowWidth < fullHDWideWidth) {
        selectedRatioOffset = normalHDOffsetRatio;
    } else if (windowWidth < fullHDUltraWideWidth) {
        selectedRatioOffset = wideHDOffsetRatio;
    } else {
        selectedRatioOffset = ultraWideHDOffsetRatio;
    }
}

let pipeRight = document.querySelector(".pipe-right");
let pipeLeft = document.querySelector(".pipe-left");
let startPosition = windowHeight / 3;
pipeRight.style.top = `${startPosition}px`;
pipeLeft.style.top = `${startPosition}px`;

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let scrollTrigger = windowHeight / 200;

    if (scrollPosition > scrollTrigger) {
        let offset = (scrollPosition - scrollTrigger) * 0.1;
        document.body.style.backgroundPosition = `center ${-offset}px`;
        
        let pipeOffset = (scrollPosition - scrollTrigger) * selectedRatioOffset;
        pipeRight.style.top = `${-pipeOffset + startPosition}px`;
        pipeRight.style.opacity = 1
        pipeLeft.style.opacity = 1
        pipeLeft.style.top = `${-pipeOffset + startPosition}px`;
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

const swiperWrapper = document.querySelector(".swiper-wrapper")

for (let i = 1; i <= numberOfImagePortfolio; i++) {
    let img = new Image()
    img.src = `src/images/portfolio/portfolio${i}.png`
    img.onload = () => {
        let slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        let imageElement = document.createElement('img')
        imageElement.src = img.src
        slide.appendChild(imageElement)
        swiperWrapper.appendChild(slide)
    }
}
