document.addEventListener('DOMContentLoaded',init);
function init() {
    navitem.addEventListener('mouseout',linkwhite());
    navitem.addEventListener('mouseover',linkgreen());
}
function linkwhite() {
    cmd1.classList.remove('linkgreen');
    cmd2.classList.remove('linkgreen');
    cmd3.classList.remove('linkgreen');
    cmd4.classList.remove('linkgreen');
    cmd1.classList.add('linkwhite');
    cmd2.classList.add('linkwhite');
    cmd3.classList.add('linkwhite');
    cmd4.classList.add('linkwhite');
}
function linkgreen() {
    cmd1.classList.remove('linkwhite');
    cmd2.classList.remove('linkwhite');
    cmd3.classList.remove('linkwhite');
    cmd4.classList.remove('linkwhite');
    cmd1.classList.add('linkgreen');
    cmd2.classList.add('linkgreen');
    cmd3.classList.add('linkgreen');
    cmd4.classList.add('linkgreen');
}