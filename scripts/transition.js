document.addEventListener("DOMContentLoaded", () => {
    // Apply the entrance animation to the page
    document.body.classList.add("page-enter-opacity");

    // Capture all links to manage the transition
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            const target = this.getAttribute("href");

            // Check that the link remains on the same site
            if (!target.startsWith("http") && target !== "#") {
                event.preventDefault(); // Bloquer la navigation immédiate
                
                //Select different pipes
                const pipeLeft = document.querySelector(".pipe-left");
                const pipeRight = document.querySelector(".pipe-right");

                // Add transition style to pipes
                if (pipeLeft && pipeRight) {
                    pipeLeft.style.transition = pipeRight.style.transition = "transform 1.5s ease-in-out";
                    let oldValueTransform = Number(pipeRight.style.transform.replace("translateY(", "").replace("px)", ""))
                    let alreadyTransform = pipeLeft.clientHeight + oldValueTransform
                    let translateY = alreadyTransform - oldValueTransform
                    pipeLeft.style.transform = `translateY(${-translateY}px) scaleX(-1)`;
                    pipeRight.style.transform = `translateY(${-translateY}px)`;
                }

                pipeLeft.addEventListener("transitionend", () => {
                    document.body.classList.add("page-exit-opacity"); // Add the exit animation
                }, { once: true });
                
                setTimeout(() => {
                    window.location.href = target; // Change page after the animation
                }, 1900);
            }
        });
    });
});



