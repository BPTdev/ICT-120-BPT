//Auteur Benoit Pierrehumbert
//Date 15.11.2019
//Projet Examen 120
//Versoin 1
//Titre js2
document.addEventListener('DOMContentLoaded',init);
function init() {//function to inits addevent listenr

    txtFirstName.addEventListener('keyup',funtxtFN);
    txtLastName.addEventListener('keyup',funtxtLN);
    txtP1.addEventListener('keyup',funP1);
    txtP2.addEventListener('keyup',funP2);
}

function funtxtFN() {//set the preference for first name
    longeur = txtFirstName.value.length;
    if (longeur == "") {
        FNerror.classList.add('d-none');
    } else {
        if (longeur < 4) {
            FNerror.classList.remove('d-none');
        } else if (longeur >= 4) {
            FNerror.classList.add('d-none');
        }
    }
}

function funtxtLN() {//set the preference for lastname
    longeur = txtLastName.value.length;
    if (longeur == "") {
        LNerror.classList.add('d-none');
    } else {
        if (longeur < 4) {
            LNerror.classList.remove('d-none');
        } else if (longeur >= 4) {
            LNerror.classList.add('d-none');
        }
    }
}
function funP1() {//set the preference for first password
    longeur = txtP1.value.length;
    if (longeur ==0) {
        P1error.classList.add('d-none');
    } else {
        if (longeur < 6) {
            P1error.classList.remove('d-none');
        } else if (longeur >= 4) {
            P1error.classList.add('d-none');
        }
    }
}
function funP2() {//set the preference for second password
    longeur = txtP2.value.length;
    if (longeur ==0) {
        P2error.classList.add('d-none');
    } else {
        if (txtP2.value!=txtP1.value) {
            P2error.classList.remove('d-none');
        } else if (txtP2.value==txtP1.value) {
            P2error.classList.add('d-none');
        }
    }
}

