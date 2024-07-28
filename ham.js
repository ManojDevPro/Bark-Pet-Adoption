document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navCenter = document.querySelector('.nav-center');
    const navRight = document.querySelector('.nav-right');

    hamburger.addEventListener('click', () => {
        navCenter.classList.toggle('active');
        navRight.classList.toggle('active');
    });
});
