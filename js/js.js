
let btns = document.querySelectorAll('.accordeon_box');
let texts = document.querySelectorAll('.accordeon_text');


btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        texts[index].classList.toggle('visible');

    });
});