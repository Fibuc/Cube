document.addEventListener("DOMContentLoaded", function () {
    const neonEffectDealer = document.querySelector(".neon-effect-dealer");

    if (window.innerWidth / window.innerHeight > 2) {
        neonEffectDealer.style.height = `76%`
        neonEffectDealer.style.clipPath = `polygon(56% 0%, 83% 21%, 78% 79%, 141% 90%, 100% 100%, 0% 100%, -15% 12%)`;
    };
    if (window.innerWidth / window.innerHeight > 3) {
        neonEffectDealer.style.height = `113%`
    };

    function flickerNeonDealer() {
        let flickerDelayDealer = Math.random() * 50 + 5;
        let opacityDealer = Math.random() * 0.05; // Opacité en haut entre 0.5 et 1

        neonEffectDealer.style.background = `linear-gradient(rgba(0, 0, 0, ${opacityDealer}) 5%, rgba(0, 0, 0, ${opacityDealer}) 25%,  rgba(0, 0, 0, ${opacityDealer * 3}) 55%,  rgba(0, 0, 0, ${opacityDealer * 5}) 100%)`;
        
        setTimeout(flickerNeonDealer, flickerDelayDealer);
    };


    if (window.innerWidth >= 992) {
        flickerNeonDealer();
    }
});