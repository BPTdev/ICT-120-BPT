document.addEventListener('DOMContentLoaded',init);
function init() {
    logo1.addEventListener('click',changecolor1);
    logo2.addEventListener('click',changecolor2);
}
function changecolor1() {
        cmdherestartno.classList.remove('colorclassic');
        cmdherestartno.classList.add('colormarwan');
        cmdherearrivatno.classList.remove('colorclassic');
        cmdherearrivatno.classList.add('colormarwan');
        logo1.classList.add('d-none');
        logo2.classList.remove('d-none');
}
function changecolor2() {

        cmdherestartno.classList.add('colorclassic');
        cmdherestartno.classList.remove('colormarwan');
        cmdherearrivatno.classList.add('colorclassic');
        cmdherearrivatno.classList.remove('colormarwan');
        logo2.classList.add('d-none');
        logo1.classList.remove('d-none');
}
