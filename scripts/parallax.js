const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const classListPipes = `d-none d-lg-block pipe pipe-`
let pipeLeftElement = null
let pipeRightElement = null
let pageHeight = null;

function getSourceImage() {
    if (window.location.pathname.includes("index.html")) {
        return `src/images/style/tuyau_test.png`
    } else if (window.location.pathname.includes("portfolio.html")) {
        return `src/images/style/tuyau_test2.png`
    }
}

function addPipesToBody() {
    // Get the header element where the pipes will be inserted after
    const header = document.querySelector("header");

    // Create left and right pipe elements as images
    let pipeLeft = document.createElement("img");
    let pipeRight = document.createElement("img");
    pipeLeft.className = classListPipes + "left page-enter-pipe-left";
    pipeRight.className = classListPipes + "right page-enter-pipe-right";
    pipeLeft.src = pipeRight.src = getSourceImage();
    pipeLeft.draggable = pipeRight.draggable = false;
    header.insertAdjacentElement("afterend", pipeRight);
    header.insertAdjacentElement("afterend", pipeLeft);
    pipeLeftElement = document.querySelector(".pipe-left");
    pipeRightElement = document.querySelector(".pipe-right");

    // Wait for the pipe image to load before executing further actions
    pipeLeft.onload = function () {
        // Get the height of the left pipe image once loaded
        const imageHeight = pipeLeftElement.clientHeight;
        // Calculate the maximum scroll value for the page
        let maxScroll = pageHeight - window.innerHeight

        // Add scroll event listener to update pipe position as the page scrolls
        window.addEventListener("scroll", function () {
            let scrollY = window.scrollY;
            let maxTranslate = imageHeight - pageHeight + (windowHeight * .33);

            // Calculate the translateY value based on scroll position and maxTranslate
            let translateY = (scrollY / maxScroll) * maxTranslate;

            // Apply the transformation to the left pipe (inverted on X-axis) and right pipe
            pipeLeftElement.style.transform = `translateY(-${translateY}px) scaleX(-1)`;
            pipeRight.style.transform = `translateY(-${translateY}px)`;
        });
    };
}

// Wait for the window to load, then delay the execution by 150ms to ensure page height is calculated correctly
window.addEventListener("load", () => {
    setTimeout(() => {
        pageHeight = document.documentElement.scrollHeight;
        addPipesToBody()
    }, 150);
});




const backgroundNeon = document.querySelector('.neon-effect-dealer')
let startPositionNeon = windowHeight * 0.29 + ((windowWidth/windowHeight).toFixed(2) - 1.78) * windowHeight *.17;

let selectedBackgroundRatioOffset = null

backgroundNeon.style.top = `${startPositionNeon}px`;

if (windowHeight > quadHDHeight) {
    if (windowWidth < fourKWideWidth) {
        selectedBackgroundRatioOffset = normalWidthBackgroundOffset;

    } else if (windowWidth < fourKUltraWideWidth) {
        selectedBackgroundRatioOffset = wideWidthBackgroundOffset;

    } else {
        selectedBackgroundRatioOffset = ultraWideWidthBackgroundOffset;
    }

} else if (windowHeight > fullHDHeight) {
    if (windowWidth < quadHDWideWidth) {
        selectedBackgroundRatioOffset = normalWidthBackgroundOffset;

    } else if (windowWidth < quadHDUltraWideWidth) {
        selectedBackgroundRatioOffset = wideWidthBackgroundOffset;

    } else {
        selectedBackgroundRatioOffset = ultraWideWidthBackgroundOffset;
    }

} else {
    if (windowWidth < fullHDWideWidth) {
        selectedBackgroundRatioOffset = normalWidthBackgroundOffset;

    } else if (windowWidth < fullHDUltraWideWidth) {
        selectedBackgroundRatioOffset = wideWidthBackgroundOffset;

    } else {
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
        backgroundNeon.style.top = `${-backgroundOffset + startPositionNeon}px`;

    } else {
        document.body.style.backgroundPosition = 'center top';
    }
});
