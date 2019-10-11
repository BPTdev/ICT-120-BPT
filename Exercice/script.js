let bleu = document.getElementById('cmdbleutrace');
let bleureti = document.getElementById('divreti');
let hover = document.getElementById('hvrarial');
let yes1 = document.getElementById('cbxyes1');
let yes2 = document.getElementById('cbxyes2');
let killyes = document.getElementById('cbxyes');
let disayes = document.getElementById('greenyes');
let clkdestr = document.getElementById('destrdiv');
let divacahe = document.getElementById('divacacher');
let Pomme = document.getElementById("txtInitials");
let txtchange = document.getElementById('txtName');
bleu.addEventListener('click', funbleu);
bleureti.addEventListener('click', funbleureti);
hover.addEventListener('mouseover', funhover);
hover.addEventListener('mouseout', funpashover);
clkdestr.addEventListener('click', fundestrdiv);
yes1.addEventListener('click', funyes);
yes2.addEventListener('click', funyes);
txtchange.addEventListener('keyup', funnom);
avm.addEventListener('click', funavm);
pre.addEventListener('click', funpre);
par.addEventListener('click',funpar);
par.style.display="none";
img2.style.display="none";
img3.style.display="none";
img4.style.display="none";
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
    if ((yes1.checked === true) && (yes2.checked === true)) {
        killyes.style.display = "none";
        disayes.style.display = "block";
    }
}

function fundestrdiv() {
    divacahe.style.display = "none"
}
function funnom() {
    bleu.classList.add("test");
    let espace = " ";
    console.log('le text a changer');
    var valeurespace = txtchange.value.lastIndexOf(espace);
    var longeur = txtchange.value.length;
    var carac1 = txtchange.value.charAt(0);
    var carac2 = txtchange.value.charAt(valeurespace + 1);
    var carac3 = txtchange.value.charAt(longeur - 1);
    initials = carac1 + carac2 + carac3;
    console.log(initials);
    Pomme.value = initials.toUpperCase()
}

function funavm() {
    console.log('etape 1');
    avm.disabled = true;
    pre.disabled = false;
    par.disabled = true;

    pre.style.disabled = true;
    par.style.disabled = false;
    par.style.display="inline";
    img1.style.display="none";
    img2.style.display="inline";
}

function funpre() {
    avm.style.display="none";
    pre.disabled = true;
    par.disabled = false;
    img2.style.display="none";
    img3.style.display="inline";
}

function funpar() {
    par.disabled = true;
    console.log('parter ok');
    avm.style.display="none";
    pre.style.display="none";
    img3.style.display="none";
    img4.style.display="inline";
    setTimeout(fungo,3000)

}
function fungo(){

    avm.disabled = false;
    avm.style.display="inline";
    pre.style.display="inline";
    pre.style.disabled = true;
    par.style.display="none";
    img4.style.display="none";
    img1.style.display="inline";

}