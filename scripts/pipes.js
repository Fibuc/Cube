const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const pipeRight = document.querySelector(".pipe-right");
const pipeLeft = document.querySelector(".pipe-left");
const startPosition = windowHeight / 3;

let selectedRatioOffset = null

// Configuration initial position of pipes
pipeRight.style.top = `${startPosition}px`;
pipeLeft.style.top = `${startPosition}px`;

// Check screensize of visitor.
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

// Add paralax to body background and pipes
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

