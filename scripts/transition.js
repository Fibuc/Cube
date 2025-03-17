
document.addEventListener("DOMContentLoaded", (load) => {
    // Appliquer l'animation d'entrée à la page
    const pipes = document.querySelectorAll(".pipe");
    pipes.forEach(pipe => {
        pipe.classList.add("page-enter-pipes")
    })
    document.body.classList.add("page-enter-opacity");

    // Capturer tous les liens pour gérer la transition
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            const target = this.getAttribute("href");

            // Vérifier que le lien reste sur le même site
            if (!target.startsWith("http") && target !== "#") {
                event.preventDefault(); // Bloquer la navigation immédiate
                
                

                // const pipeLeft = document.querySelector(".pipe-left");
                // if (pipeLeft) {
                //     pipeLeft.style.transition = "top 1.2s ease-in-out";
                //     pipeLeft.style.top = "-5000px"; // Modifie la position (ajuste selon ton besoin)
                // }
                document.body.classList.add("page-exit-opacity"); // Ajouter l'animation de sortie
                // pipeLeft.addEventListener("transitionend", () => {
                //     pipeLeft.style.backgroundColor = "red"; // Appliquer une nouvelle modification
                // }, { once: true });
                
                setTimeout(() => {
                    window.location.href = target; // Changer de page après l'animation
                }, 400); // Durée de l'animation CSS
            }
        });
    });
});



