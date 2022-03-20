export default class Modal {
    constructor(modal) {
        this.modal           = modal;
        this.body            = document.querySelector('body');
        this.modalLock       = document.querySelectorAll('.modal-lock');
        this.modalClose      = modal.querySelectorAll('.modal-close');


        this.openModal = this.openModal.bind(this);
        this.closeModalOnclickNotModal = this.closeModalOnclickNotModal.bind(this);

        this.initEvents()

    }

    async initEvents() {
        this.modal.addEventListener('click', this.closeModalOnclickNotModal);

        this.modalClose.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                this.closeModal();
            });

        });
    }

    async closeModalOnclickNotModal(event) {
        if (!event.target.closest('.modal__content')) {
            event.preventDefault();
            await this.closeModal();
        }
    }

    async closeModal() {
        this.modal.classList.remove('open');
        await this.bodyUnLock();
    }

    async openModal() {

        this.modal.classList.add('open');
        await this.bodyLock();
    }

    async bodyUnLock() {
        this.modalLock.forEach(item => {
           item.style.paddingRight = '0px';
        });
        this.body.style.paddingRight = '0px';
        this.body.classList.remove('lock');
    }

    async bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';


        this.modalLock.forEach(item => {
           item.style.paddingRight = lockPaddingValue;
        });

        this.body.style.paddingRight = lockPaddingValue;
        this.body.classList.add('lock');
    }

}

document.querySelectorAll('[data-modal]').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const modalId = event.target.getAttribute('data-modal');
        let modal = document.querySelector(`#${modalId}`);
        modal = new Modal(modal);
        modal.openModal();
    });
});
