import Inputmask from "inputmask";

const mask = new Inputmask({
    mask: '(+7 (999) 999-99-99)|(8 (999) 999-99-99)',
    // placeholder: "",
    showMaskOnHover: false,
    showMaskOnFocus: false
});

function removeInputIcon(event) {
   let input = event.target;
   input.classList.toggle('focus');
}


document.querySelectorAll('[type="tel"]').forEach(item => {
   mask.mask(item);
   item.pattern = '(\\+[0-9]{1}|8)[\\W\\w]+[0-9]{3}[\\W\\w]+[0-9]{3}-[0-9]{2}-[0-9]{2}';
})

document.querySelectorAll('form input').forEach(item => {
    item.addEventListener('focus', removeInputIcon);
    item.addEventListener('blur', removeInputIcon);
})
