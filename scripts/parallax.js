const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const pipeRight = document.querySelector(".pipe-right");
const pipeLeft = document.querySelector(".pipe-left");
const backgroundNeon = document.querySelector('.neon-effect-dealer')
const startPositionPipes = windowHeight / 3;
let startPositionNeon = windowHeight * 0.29 + ((windowWidth/windowHeight).toFixed(2) - 1.78) * windowHeight *.17;

let selectedPipeRatioOffset = null
let selectedBackgroundRatioOffset = null

// Configuration initial position of pipes
pipeRight.style.top = `${startPositionPipes}px`;
pipeLeft.style.top = `${startPositionPipes}px`;
backgroundNeon.style.top = `${startPositionNeon}px`;
console.log()

// Check screensize of visitor.
if (windowHeight > quadHDHeight) {
    if (windowWidth < fourKWideWidth) {
        selectedPipeRatioOffset = normal4KOffsetPipesRatio;
        selectedBackgroundRatioOffset = normalWidthBackgroundOffset;

    } else if (windowWidth < fourKUltraWideWidth) {
        selectedPipeRatioOffset = wide4KOffsetPipesRatio;
        selectedBackgroundRatioOffset = wideWidthBackgroundOffset;

    } else {
        selectedPipeRatioOffset = ultraWide4KOffsetPipesRatio;
        selectedBackgroundRatioOffset = ultraWideWidthBackgroundOffset;
    }

} else if (windowHeight > fullHDHeight) {
    if (windowWidth < quadHDWideWidth) {
        selectedPipeRatioOffset = normalQuadHDOffsetPipesRatio;
        selectedBackgroundRatioOffset = normalWidthBackgroundOffset;

    } else if (windowWidth < quadHDUltraWideWidth) {
        selectedPipeRatioOffset = wideQuadHDOffsetPipesRatio;
        selectedBackgroundRatioOffset = wideWidthBackgroundOffset;

    } else {
        selectedPipeRatioOffset = ultraWideQuadHDOffsetPipesRatio;
        selectedBackgroundRatioOffset = ultraWideWidthBackgroundOffset;
    }

} else {
    if (windowWidth < fullHDWideWidth) {
        selectedPipeRatioOffset = normalHDOffsetPipesRatio;
        selectedBackgroundRatioOffset = normalWidthBackgroundOffset;

    } else if (windowWidth < fullHDUltraWideWidth) {
        selectedPipeRatioOffset = wideHDOffsetPipesRatio;
        selectedBackgroundRatioOffset = wideWidthBackgroundOffset;

    } else {
        selectedPipeRatioOffset = ultraWideHDOffsetPipesRatio;
        selectedBackgroundRatioOffset = ultraWideWidthBackgroundOffset;
    }
}

// Add paralax to body background and pipes
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let scrollTrigger = windowHeight / 200;

    if (scrollPosition > scrollTrigger) {
        let backgroundOffset = (scrollPosition - scrollTrigger) * selectedBackgroundRatioOffset;
        document.body.style.backgroundPosition = `center ${-backgroundOffset}px`;
        console.log(startPositionNeon)
        console.log(backgroundOffset)
        console.log(backgroundNeon.style.top)
        backgroundNeon.style.top = `${-backgroundOffset + startPositionNeon}px`;

        let pipeOffset = (scrollPosition - scrollTrigger) * selectedPipeRatioOffset;
        pipeRight.style.top = `${-pipeOffset + startPositionPipes}px`;
        pipeLeft.style.top = `${-pipeOffset + startPositionPipes}px`;
    } else {
        document.body.style.backgroundPosition = 'center top';
    }
});


// document.getElementById("transition-link").addEventListener("click", function(event) {
//     event.preventDefault();
//     let door1 = document.querySelector(".transition-block-door-1");
//     let door2 = document.querySelector(".transition-block-door-2");
//     // let audio = new Audio("src/sounds/elevator.wav")

//     door1.classList.add("slide-in");
//     door2.classList.add("slide-out");

//     audio.play();


//     setTimeout(() => {
//         window.location.href = this.href;
//     }, 2000);
// });

