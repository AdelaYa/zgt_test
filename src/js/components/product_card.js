function sendForm(event) {
    event.preventDefault();
    const form = event.target;
    let button = form.querySelector('button[type="submit"]');
    button.classList.toggle('ordered');

    if (button.classList.contains('ordered')) {
        button.innerText = 'Отменить';
    } else {
        button.innerText = 'Заказать';
    }

}

function validNumberInput (event) {
    const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode === 46 || charCode > 31 && (charCode < 48 || charCode > 57)){
            event.preventDefault();
        }
    return true;
}

const productForm = document.querySelectorAll('.product-form');

productForm.forEach(item => {
    item.addEventListener('submit', sendForm);

    const input = item.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('keydown', validNumberInput);
    });
});