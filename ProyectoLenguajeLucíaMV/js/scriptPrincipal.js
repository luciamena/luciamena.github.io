window.addEventListener("load", funcioInici,false);
window.addEventListener("keydown", Color, false);
var contador = 0;
var imagenes = new Array(5);
var link = new Array(5);
var titulo = new Array(5);

titulo[0]='Descubre Asia';
titulo[1]='Descubre América';
titulo[2]='Descubre Europa';
titulo[3]='Descubre Oceanía';
titulo[4]='Descubre África';

imagenes[0]="cabecera/cabecera1.jpg";
imagenes[1]="cabecera/cabecera2.jpg";
imagenes[2]="cabecera/cabecera3.jpg";
imagenes[3]="cabecera/cabecera4.jpg";
imagenes[4]="cabecera/cabecera5.jpg";

link[0]='continentes.html#asiCont';
link[1]='continentes.html#ameCont';
link[2]='continentes.html#euCont';
link[3]='continentes.html#oceCont';
link[4]='continentes.html#afriCont';
    
function funcioInici(){
    cambiarImagenes();
    var oceania = document.getElementById("oceania");
    oceania.onmouseover = funcioEncimaOce;
    oceania.onmouseout  = funcioFueraOce;
    var oceania = document.getElementById("europa");
    oceania.onmouseover = funcioEncimaEu;
    oceania.onmouseout  = funcioFueraEu;
    var oceania = document.getElementById("asia");
    oceania.onmouseover = funcioEncimaAsi;
    oceania.onmouseout  = funcioFueraAsi;
    var oceania = document.getElementById("africa");
    oceania.onmouseover = funcioEncimaAfri;
    oceania.onmouseout  = funcioFueraAfri;
    var oceania = document.getElementById("america");
    oceania.onmouseover = funcioEncimaAme;
    oceania.onmouseout  = funcioFueraAme;
    
    var btnMenu = document.getElementById('menu');
    btnMenu.onclick = funcionMenu;
    
    var color = document.getElementById("color");
    color.onclick = ColorPeque;
}

function ColorPeque(){
    if(num%2 != 0){
        Oscuro();
    }
    else{
        Claro();
    }
}

function funcionMenu(){
    var menu = document.querySelector('#navegador ul');
    if(window.getComputedStyle(menu).display == 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}
//Cuando pasas el ratón por encima de la imagen de oceania
/*OCEANIA*/
function funcioEncimaOce(event){
    var visible = document.getElementById("pOce");
    visible.className ="visible";
}
//Cuando sale el ratón de encima de la imagen de oceania
function funcioFueraOce(event){
    var visible = document.getElementById("pOce");
    visible.className = "oculto"; 
}
//Cuando pasas el ratón por encima de la imagen de europa
/*EUROPA*/
function funcioEncimaEu(event){
    var visible = document.getElementById("pEu");
    visible.className ="visible";
    
}
//Cuando sale el ratón de encima de la imagen de europa
function funcioFueraEu(event){
    var visible = document.getElementById("pEu");
    visible.className = "oculto"; 
        
}
//Cuando pasas el ratón por encima de la imagen de asia
/*ASIA*/
function funcioEncimaAsi(event){
    var visible = document.getElementById("pAsi");
    visible.className ="visible";
    
}
//Cuando sale el ratón de encima de la imagen de asia
function funcioFueraAsi(event){
     var visible = document.getElementById("pAsi");
    visible.className = "oculto"; 
        
}
//Cuando pasas el ratón por encima de la imagen de america
/*AFRICA*/
function funcioEncimaAfri(event){
    var visible = document.getElementById("pAfri");
    visible.className ="visible";
}
//Cuando sale el ratón de encima de la imagen de africa
function funcioFueraAfri(event){
     var visible = document.getElementById("pAfri");
    visible.className = "oculto"; 
        
}
/*AMERICA*/
function funcioEncimaAme(event){
   var visible = document.getElementById("pAme");
    visible.className ="visible";
}
//Cuando sale el ratón de encima de la imagen de america
function funcioFueraAme(event){
    var visible = document.getElementById("pAme");
    visible.className = "oculto"; 
        
}

function cambiarImagenes(){
    contador++;
    contador = contador % 5;
    var banner = document.getElementById("banner");
    banner.style.backgroundImage = "url(\""+imagenes[contador]+"\")";
    document.getElementById('linkBanner').href= link[contador];
    document.getElementById('titulo').innerHTML=titulo[contador];
    setTimeout("cambiarImagenes()", 5000);
   
}

//funcion que cambia de color la pág
var num = 1;
function Color(event) {
    
    if (event.ctrlKey) {
        if (event.keyCode == 66) {
            if(num%2 != 0){
                Oscuro();
            }
            else{
                Claro();
            }
        }
    }
}

function Oscuro(){
    var p= document.getElementsByTagName('p');
            for (var i = 0; i < p.length; i++) {
                p[i].style.color = '#9fa3a7';
            }
            var h2= document.getElementsByTagName('h2');
            for (var i = 0; i < h2.length; i++) {
                h2[i].style.color = '#9fa3a7';
            }
            var h3= document.getElementsByTagName('h3');
            for (var i = 0; i < h3.length; i++) {
                h3[i].style.color = '#9fa3a7';
            }
            var h5= document.getElementsByTagName('h5');
            for (var i = 0; i < h5.length; i++) {
                h5[i].style.color = '#9fa3a7';
            }
            var h6= document.getElementsByTagName('h6');
            for (var i = 0; i < h6.length; i++) {
                h6[i].style.color = '#9fa3a7';
            }
            var ol= document.getElementsByTagName('ol');
            for (var i = 0; i < ol.length; i++) {
                ol[i].style.color = '#9fa3a7';
            }
            var ul= document.getElementsByTagName('ul');
            for (var i = 0; i < ol.length; i++) {
                ul[i].style.color = '#9fa3a7';
            }
            var lgn= document.getElementsByTagName('legend');
            for (var i = 0; i < lgn.length; i++) {
                lgn[i].style.color = '#9fa3a7';
            }
            var lbl= document.getElementsByTagName('label');
            for (var i = 0; i < lbl.length; i++) {
                lbl[i].style.color = '#9fa3a7';
            }
            var inp= document.getElementsByTagName('input');
            for (var i = 0; i < inp.length; i++) {
                inp[i].style.color = '#9fa3a7';
            }
            var radio= document.getElementsByTagName('radio');
            for (var i = 0; i < radio.length; i++) {
                radio[i].style.color = '#9fa3a7';
            }
            var a= document.getElementsByTagName('a');
            for (var i = 0; i < a.length; i++) {
                a[i].style.color = '#9fa3a7';
            } 
            var bttCo= document.getElementsByClassName('bttnComent');
            for (var i = 0; i < bttCo.length; i++) {
                bttCo[i].style.color = 'white';
            } 
            var bttEdi= document.getElementsByClassName('borrarComent');
            for (var i = 0; i < bttEdi.length; i++) {
                bttEdi[i].style.color = 'white';
            }
            var enviar= document.getElementsByClassName('bttn');
            for (var i = 0; i < enviar.length; i++) {
                enviar[i].style.color = 'white';
            }
                
                
            document.getElementsByTagName("body")[0].style.background = '#101d24';
                num++;
}

function Claro(){
    var p= document.getElementsByTagName('p');
            for (var i = 0; i < p.length; i++) {
                p[i].style.color = 'black';
            }
            var h2= document.getElementsByTagName('h2');
            for (var i = 0; i < h2.length; i++) {
                h2[i].style.color = 'black';
            }
            var h3= document.getElementsByTagName('h3');
            for (var i = 0; i < h3.length; i++) {
                h3[i].style.color = 'black';
            }
            var h5= document.getElementsByTagName('h5');
            for (var i = 0; i < h5.length; i++) {
                h5[i].style.color = 'black';
            }
            var h6= document.getElementsByTagName('h6');
            for (var i = 0; i < h6.length; i++) {
                h6[i].style.color = 'black';
            }
            var ol= document.getElementsByTagName('ol');
            for (var i = 0; i < ol.length; i++) {
                ol[i].style.color = 'black';
            }
            var ul= document.getElementsByTagName('ul');
            for (var i = 0; i < ol.length; i++) {
                ul[i].style.color = 'black';
            }
            var lgn= document.getElementsByTagName('legend');
            for (var i = 0; i < lgn.length; i++) {
                lgn[i].style.color = 'black';
            }
            var lbl= document.getElementsByTagName('label');
            for (var i = 0; i < lbl.length; i++) {
                lbl[i].style.color = 'black';
            }
            var inp= document.getElementsByTagName('input');
            for (var i = 0; i < inp.length; i++) {
                inp[i].style.color = 'black';
            }
            var radio= document.getElementsByTagName('radio');
            for (var i = 0; i < radio.length; i++) {
                radio[i].style.color = 'black';
            }     
            var a= document.getElementsByTagName('a');
            for (var i = 0; i < a.length; i++) {
                a[i].style.color = '#101d24';
            } 
            var foot = document.getElementsByClassName("foot");
            for (var i = 0; i < foot.length ; i++){
                    foot[i].style.color = '#9fa3a7';
            }
            var bttCo= document.getElementsByClassName('bttnComent');
            for (var i = 0; i < bttCo.length; i++) {
                bttCo[i].style.color = 'white';
            } 
            var bttEdi= document.getElementsByClassName('borrarComent');
            for (var i = 0; i < bttEdi.length; i++) {
                bttEdi[i].style.color = 'white';
            }
            var enviar= document.getElementsByClassName('bttn');
            for (var i = 0; i < enviar.length; i++) {
                enviar[i].style.color = 'white';
            }
    
            document.getElementsByTagName("body")[0].style.background = 'white';
                num++;
    
}




