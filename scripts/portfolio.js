const numberImageByRow = 4;
const rowPortfolioClassList = ["row", "justify-content-center"];
const imagePortfolioClassList = ["img-fluid"];
const imagePortfolioDivClassList = [
  "col-12",
  "col-md-6",
  "col-lg-3",
  "d-flex",
  "align-items-center",
  "justify-content-center",
  "py-2",
  "thumbnail"
];

function createSwiper(){
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

}

function showImage(img) {
  const modalImage = document.getElementById("modal-image");
  modalImage.src = img.src;
  const pictureModal = new bootstrap.Modal(document.getElementById('pictureModal'));
  pictureModal.show();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
  }
}

function addPictureOnSwipper() {
  let allChilds = [];
  let swiperWrapper = document.querySelector(".swiper-wrapper")
  for (let i = 1; i <= numberOfImagePortfolio; i++) {
      let img = new Image();
      img.src = `src/images/portfolio/portfolio${i}.jpg`;
      let slide = document.createElement("div");
      let imageElement = document.createElement('img');
      img.onload = () => {
          slide.classList.add("swiper-slide");
          imageElement.src = img.src;
          if (windowWidth > 619) {
            imageElement.onclick = () => showImage(imageElement);
          }
        };
      slide.appendChild(imageElement);
      allChilds.push(slide)
    }
  
  shuffleArray(allChilds);
  allChilds.forEach(child => {
      swiperWrapper.appendChild(child);
  });
}

function createImageElement(parent, clientCurrentNumber) {
  let imageDiv = document.createElement("div");
  let imageElement = document.createElement('img');

  imageDiv.classList.add(...imagePortfolioDivClassList);
  imageElement.classList.add(...imagePortfolioClassList);
  imageElement.src = `src/images/portfolio/portfolio${clientCurrentNumber + 1}.jpg`;
  if (windowWidth > 767) {
    imageElement.onclick = () => showImage(imageElement);
  }

  imageDiv.appendChild(imageElement);
  parent.appendChild(imageDiv);
};

function createRow(parent) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add(...rowPortfolioClassList);
  parent.appendChild(rowDiv);
  return rowDiv;
}

function createGallery() {
  let containerDiv = document.querySelector(".portfolio-div .container")
  let currentRow = null;

  for (let i = 0; i < numberOfImagePortfolio; i++) {
    if (i === 0 || i % numberImageByRow === 0) {
        currentRow = createRow(containerDiv);
    }
    createImageElement(currentRow, i)
  };
}

if (window.location.pathname.includes("index.html")) {
  createSwiper();
  addPictureOnSwipper();
} else if (window.location.pathname.includes("portfolio.html")) {
  createGallery();
}
