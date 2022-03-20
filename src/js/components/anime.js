const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const elementId = item.getAttribute('href');

        if (elementId !== '#') {

            const element = document.querySelector(elementId);

            if (element) {
                document.querySelector('html').classList.remove('lock');

                const header = document.querySelector('header');
                header.classList.remove('modal-lock', 'open-menu')

                header.querySelector('.header__burger').classList.remove('active');
                header.querySelector('.header__content').classList.remove('active');


                const offset = 45;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});