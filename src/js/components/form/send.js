import makeRequest from "../make_request";


class SendForm {

    constructor(form, formType) {

        this.form = form;
        this.formType = formType;
        this.initEvents();
    }

    initEvents() {

        this.form.addEventListener('submit', event => {
            console.log('submit');
            event.preventDefault();

            this.hideErrors();

            this.startLoading();
            this.sendRequest();
        })
    }

    async sendRequest() {
        let Form_Data = new FormData(this.form);

        let json = await makeRequest(this.form.method, this.form.action, Form_Data);
        this.stopLoading();
        this.validate(json);
    }

    validate(json) {
        let response = JSON.parse(json);
        if( response.errors ){

            for(let field in response.fields) {
                let elem = this.form.querySelector(`.${field}`);
                console.log(elem.querySelector('.error-field span'));

                elem.querySelector('.error-field span').textContent = response.fields[field];
            }
        } else {
            this.finish();
        }
    }

    hideErrors() {
        this.form.querySelectorAll('.error-field span').forEach( elem => {
            elem.textContent = '';
        })
    }
    resetInputs() {
        this.form.querySelectorAll('.contact-field').forEach( elem => {
            elem.classList.remove('active');
            elem.querySelector('input').value = '';
        })

        this.form.querySelectorAll('.custom-file').forEach( elem => {
            elem.classList.remove('active');
            elem.querySelector('input').value = '';
        })
    }

    startLoading() {
        this.form.classList.add('loading');
    }

    stopLoading() {
        this.form.classList.remove('loading');
    }

    finish() {
        this.form.classList.add('success');
        this.resetInputs();
        setTimeout(() => {
            this.form.classList.remove('success');
        }, 5000);
    }

}

document.querySelectorAll('.callback__form').forEach(item => {
    new SendForm(item, 'callback');
});

document.querySelectorAll('.form__consultation').forEach(item => {
    new SendForm(item, 'consultation');
});
