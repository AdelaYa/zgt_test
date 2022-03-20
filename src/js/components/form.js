document.querySelectorAll('.custom-checkbox').forEach(item => {
    const inputParent = item.parentElement;
    const input = inputParent.querySelector('input[type=checkbox]');

    if (input) {
        input.addEventListener('change', ()=> {
            item.classList.toggle('active');
        })
    }
})