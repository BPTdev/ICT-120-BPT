let bleu=document.getElementById('cmdbleutrace');
let bleureti=document.getElementById('divreti');
let hover=document.getElementById('hvrarial');
let yes1=document.getElementById('cbxyes1');
let yes2=document.getElementById('cbxyes2');
let killyes=document.getElementById('cbxyes');
let disayes=document.getElementById('greenyes');
let clkdestr=document.getElementById('destrdiv');
let divacahe=document.getElementById('divacacher');
let changtext=document.getElementById('textName');
let initials=document.getElementById('txtInitials');
bleu.addEventListener('click',funbleu);
bleureti.addEventListener('click',funbleureti);
hover.addEventListener('mouseover',funhover);
hover.addEventListener('mouseout',funpashover);
clkdestr.addEventListener('click',fundestrdiv);
yes1.addEventListener('click',funyes);
yes2.addEventListener('click',funyes);
changtext.addEventListener('change',funnom)
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
        killyes.style.display = "none";
        disayes.style.display = "block";
    }
}
function fundestrdiv() {
    divacahe.style.display = "none"
}
function funnom() {
    let espace=" ";
    let valeurespace=changtext.indexOf(espace);
    let longeur=changtext.length;
    let carac1=changtext[1];
    let carac2=changtext[valeurespace+1];
    let carac3=changtext[longeur];
    initials=carac1+carac2+carac3;

}