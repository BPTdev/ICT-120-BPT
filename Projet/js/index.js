/*
Auteur: Benoît Pierrehumbert
Date: 10/11/2019
Projet: Site Trensport voyage d'étude
*/
document.addEventListener('DOMContentLoaded',init);
function init() {
    logo1.addEventListener('click',funchangecolor1);
    logo2.addEventListener('click',funchangecolor2);
    cmdedit.addEventListener('click',funedit);
    finishedit.addEventListener('click',funfinishedit);
    cmdadd.addEventListener('click',funaddline);
    changevalue.addEventListener('click',edit);
    savevalue.addEventListener('click',save );
    cmdherestartyes.addEventListener('click',startno);
    cmdherestartno.addEventListener('click',startyes);
    cmdherearrivatyes.addEventListener('click',arrivatno);
    cmdherearrivatno.addEventListener('click',arrivatyes);

}
function funchangecolor1() {
        cmdherestartno.classList.remove('colorclassic');
        cmdherestartno.classList.add('colormarwan');
        cmdherearrivatno.classList.remove('colorclassic');
        cmdherearrivatno.classList.add('colormarwan');
        logo1.classList.add('d-none');
        logo2.classList.remove('d-none');
}
function funchangecolor2() {

        cmdherestartno.classList.add('colorclassic');
        cmdherestartno.classList.remove('colormarwan');
        cmdherearrivatno.classList.add('colorclassic');
        cmdherearrivatno.classList.remove('colormarwan');
        logo2.classList.add('d-none');
        logo1.classList.remove('d-none');
}
function funedit() {
        cmdedit.classList.add('d-none');
        finishedit.classList.remove('d-none');
        cmdadd.classList.remove('d-none');
        changevalue.classList.remove('d-none');
}
function edit() {
        nbtd=tbltransport.children.length;
        for (i=0;i<+nbtd;i++) {
                row = tbltransport.children[i];
                for (j=0;j<row.children.length;j++){
                        cell=row.children[j];
                        inp=document.createElement('input');
                        inp.type='text';
                        inp.value=cell.innerText;
                        cell.innerText="";
                        cell.appendChild(inp);
                }
        }
        changevalue.classList.add('d-none');
        cmdadd.classList.add('d-none');
        savevalue.classList.remove('d-none');
}
function save() {
        nbtd=tbltransport.children.length;
        for (i=0;i<+nbtd;i++) {
                row = tbltransport.children[i];
                for (j=0;j<row.children.length;j++){
                        cell=row.children[j];
                        cell.innerText=cell.firstChild.value;
                }
        }
        savevalue.classList.add('d-none');
        changevalue.classList.remove('d-none');
        cmdadd.classList.remove('d-none');
}
function funfinishedit() {
        cmdedit.classList.remove('d-none');
        finishedit.classList.add('d-none');
        cmdadd.classList.add('d-none');
        changevalue.classList.add('d-none');
}
function funaddline(){
        newtr = document.createElement('tr');
        newtd1 = document.createElement('td');
        newtd1.innerText = 'Avion';
        newtd2 = document.createElement('td');
        newtd2.innerText = 'Pékin';
        newtd3 = document.createElement('td');
        newtd3.innerText = 'Genève';
        newtd4 = document.createElement('td');
        newtd4.innerText = 'A-320';
        newtd5 = document.createElement('td');
        newtd5.innerText = '234';
        newtd6 = document.createElement('td');
        newtd6.innerText = 'SWG-486';
        newtd7 = document.createElement('td');
        newtd7.innerText = 'Luftanza';
        newtd8 = document.createElement('td');
        newtd8.innerText = '1:00';
        newtd9 = document.createElement('td');
        newtd9.innerText = '17:00';
        newtd10 = document.createElement('td');
        newtd10.innerText = '18:00';
        newtd11 = document.createElement('td');
        newdiv = document.createElement('div');
        newdiv.innerText = 'Supprimer';
        newdiv.className = 'btn btn-danger';
        newdiv.addEventListener('click',killLine);
        newtd11.appendChild(newdiv);
        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);
        newtr.appendChild(newtd5);
        newtr.appendChild(newtd6);
        newtr.appendChild(newtd7);
        newtr.appendChild(newtd8);
        newtr.appendChild(newtd9);
        newtr.appendChild(newtd10);
        newtr.appendChild(newtd11);
        tbltransport.appendChild(newtr)
}// Cette fonction est appelée au click sur un élément
function killLine(event) {
        button = event.target;
        td = button.parentNode;
        tr = td.parentNode;
        table = tr.parentNode;
        table.removeChild(tr);
}
function startyes() {
        alert("coucou");
    cmdherestartyes.classList.add('d-none');
}
function startno() {
    cmdherestartno.classList.add('d-none');

}
function arrivatyes() {
    cmdherearrivatyes.classList.add('d-none');
}
function arrivatno() {
    cmdherearrivatno.classList.add('d-none');
}