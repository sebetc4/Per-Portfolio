import autosize from 'autosize';

class Request {
    constructor(form, submitDiv) {
        this.form = form;
        this.submitDiv = submitDiv;
        this.init();
    }

    async init() {
        const apiUrl = import.meta.env.PROD
            ? 'https://sebastien-etcheto-contact.alwaysdata.net/api/contact'
            : 'http://localhost:8080/api/contact';
        this.submitDiv.classList.add('contact-form-submit--submitting');
        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lastName: this.form.lastname.value,
                    firstName: this.form.firstname.value,
                    email: this.form.email.value,
                    number: this.form.number.value,
                    message: this.form.message.value,
                }),
            });
            res.ok ? this.requetSuccess() : this.requetError();
        } catch (err) {
            this.requetError();
        }
    }

    requetSuccess() {
        this.submitDiv.classList.remove('contact-form-submit--submitting');
        this.submitDiv.classList.add('contact-form-submit--success');
        this.form.lastname.value = '';
        this.form.firstname.value = '';
        this.form.email.value = '';
        this.form.number.value= '';
        this.form.message.value = '';
    }

    requetError() {
        this.submitDiv.classList.remove('contact-form-submit--submitting');
        this.submitDiv.classList.add('contact-form-submit--error');
    }
}

class Input {
    constructor(form, htmlElement, regExp) {
        this.htmlElement = htmlElement;
        this.regExp = regExp;
        this.validValue = false;
        form.allInputs.push(this);
    }
}

export default class Form {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.allInputsContainer = Array.from(this.form.querySelectorAll(`.contact-form-input-container`));
        this.submitDiv = this.form.querySelector('.contact-form-submit');
        this.allInputs = [];
        this.init();
    }

    init() {
        // Init input
        new Input(
            this,
            this.form.firstname,
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹ '-]{2,}$/u
        );
        new Input(
            this,
            this.form.lastname,
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹ '-]{2,}$/u
        );
        new Input(this, this.form.number, /^\d{10}$/);
        new Input(this, this.form.email, /^[a-zA-Z0-9_.-]+[@]{1}[a-zA-Z0-9_.-]+[.]{1}[a-z]{2,10}$/);
        new Input(this, this.form.message, /(?!^$)([^\s])/);

        autosize(this.form.message);

        this.allInputs.forEach((input) => {
            input.htmlElement.value && this.checkValidInput(input);
            input.htmlElement.addEventListener('input', () => this.checkValidInput(input));
        });

        // Focused input
        this.form.addEventListener(
            'focus',
            (event) => {
                event.target !== this.submitButton &&
                    event.target.parentNode.classList.add('contact-form-input-container--focused');
            },
            true
        );

        this.form.addEventListener(
            'blur',
            (event) => {
                event.target !== this.submitButton &&
                    event.target.parentNode.classList.remove('contact-form-input-container--focused');
            },
            true
        );

        // Submit

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitDiv.classList.remove('contact-form-input-container--success');
            this.submitDiv.classList.remove('contact-form-input-container--error');
            this.checkAllInputValid() && new Request(this.form, this.submitDiv);
        });
    }

    checkValidInput(input) {
        const { regExp, htmlElement } = input;
        if (regExp.test(htmlElement.value)) {
            htmlElement.parentNode.classList.remove('contact-form-input-container--invalid');
            htmlElement.parentNode.classList.add('contact-form-input-container--valid');
            input.validValue = true;
        } else {
            htmlElement.parentNode.classList.remove('contact-form-input-container--valid');
            htmlElement.parentNode.classList.add('contact-form-input-container--invalid');
            input.validValue = false;
        }
    }

    checkAllInputValid() {
        for (let input of this.allInputs) {
            if (!input.validValue) {
                input.htmlElement.parentNode.classList.add('contact-form-input-container--invalid');
                return false;
            }
        }
        return true;
    }
}