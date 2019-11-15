
//Auteur Benoit Pierrehumbert
//Date 15.11.2019
//Projet Examen 120
//Versoin 1
//Titre js2

document.addEventListener('DOMContentLoaded',init);
function init() {//function to inits addevent listenr
    funLName();
    funName();
    desc.addEventListener('keyup',fundesc);
}

    function funLName() {//put last name in title

        equal = "=";
        txtFNValue="";
        value2equal = window.location.search.lastIndexOf(equal);
        longeur=window.location.search.length;
        for (i=1;i<=longeur-value2equal;i++){
            txtFNcarac=window.location.search.charAt(i+value2equal);
            txtFNValue= txtFNValue+txtFNcarac;
        }
        nom.innerText=txtFNValue;


    }
    function funName() {//put name in title
        equal = "=";
        comercialand = "&";
        txtLNValue="";
        valueAnd = window.location.search.lastIndexOf(comercialand);
        longeur=window.location.search.length;
        for (i=14;i<valueAnd;i++){

            txtLNcarac=window.location.search.charAt(i);
            txtLNValue= txtLNValue+txtLNcarac;

        }

        prenom.innerText=txtLNValue

    }
function fundesc() {//set the preference for description
    if (desc.value.length==0){
        tropcourt.classList.add('d-none')
    } else {
        if (desc.value.length<30) {
            tropcourt.classList.remove('d-none');
        } else if (desc.value.length>=30) {
            tropcourt.classList.add('d-none');
            if (desc.value.length==144){
                desc.substring(145,150);
            }
        }
    }
    nbcarac.innerText=144-desc.value.length;
}