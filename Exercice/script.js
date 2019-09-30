let bleu=document.getElementById('cmdbleutrace');
let bleureti=document.getElementById('divreti');
let hover=document.getElementById('hvrarial');
let yes1=document.getElementById('cbxyes1');
let yes2=document.getElementById('cbxyes2');
let killyes=document.getElementById('cbxyes');
let disayes=document.getElementById('greenyes');
bleu.addEventListener('click',funbleu);
bleureti.addEventListener('click',funbleureti);
hover.addEventListener('mouseover',funhover);
hover.addEventListener('mouseout',funpashover);
function funbleu() {
    bleu.classList.add('cssbleutrace')
}
function funbleureti() {
    bleu.classList.remove('cssbleutrace')
}
function funhover() {
    hover.classList.add('csshover')
}
function funpashover() {
    hover.classList.remove('csshover')
}
function funyes() {
    if ((yes1.checked === true)&&(yes2.checked === true)){
        killyes.style.display = "none"
        document.getElementById('disayes').style.display = "block"
    }
}