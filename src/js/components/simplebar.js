import SimpleBar from 'simplebar';
// import 'simplebar/dist/simplebar.css';


document.querySelectorAll('[data-simplebar="simple"]').forEach(item => {
    const simpleBar = new SimpleBar(item, {
        // option1: value1,
        // option2: value2
    });
    simpleBar.recalculate();
});