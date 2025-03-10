window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let scrollTrigger = windowHeight / 4;

    if (scrollPosition > scrollTrigger) {
        let offset = (scrollPosition - scrollTrigger) * 0.1;
        document.body.style.backgroundPosition = `center ${-offset}px`;
    } else {
        document.body.style.backgroundPosition = 'center top';
    }
});
