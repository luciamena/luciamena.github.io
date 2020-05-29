var activo = false;
window.addEventListener("load", funcioInici,false);
var idsArray = [];
var ids = 1;
var coment = "coment";
var edita ="edit";
var getId = 0;
var pe = "p";
var h="h"
function funcioInici(){
    
    var comentario = document.getElementById("writecoment");
    comentario.onchange = Contador;
    comentario.onkeyup = Contador;
    comentario.onkeydown = Contador;
    comentario.onkeypress = Contador;
    
    var comentar = document.getElementById("comentario");
    comentar.onclick= Anyadir;
    
    
    var borrar = document.getElementById("borrar");
    borrar.onclick = Borrar;
    borrar.onmouseover = Etiquetas;
    borrar.onmouseover = Etiquetas;
    
    
    var comentclear =document.getElementById('coment0');
    comentclear.onclick = BorrarComent;
    
    var editar =document.getElementById('edit0');
    editar.onclick = Editar;
    
    
}



function Etiquetas(event){
    //coordenadas
    var coordenadaX = event.clientX;
    var coordenadaY = event.clientY;
    //crear caja
    var caja = document.createElement('span');
    var texto = document.createTextNode('Borra el conetenido del comentario.');
    caja.appendChild(texto);
    
    if (!activo){
    //crear el estilo 
    activo = true;
    caja.style.color = "#9fa3a7";
    caja.style.border = "thin solid black";
    caja.style.backgroundColor = '#101d24';
    caja.style.width ="125px";
    //posicion 
    caja.style.position="fixed";
    caja.style.left=coordenadaX+"px";
    caja.style.top=coordenadaY+"px";
    document.body.appendChild(caja);
    
    setTimeout(desaparecer, 3000, caja);
    }
    
    
}
function desaparecer(elem){
    elem.style.visibility ="hidden";
    activo = false;
}


function Contador(Event){
    var formulario = document.getElementById("comentarios");
    var comentario = formulario.textarea.value;
    var contador = document.getElementById("contador");
    contador.innerHTML = comentario.length +"/250";
    
}

function Borrar (Event){
    var formulario = document.getElementById('comentarios');
    var texto = formulario.textarea;
    texto.value = "";
    Contador();
}

function Comprobar(){
    var formulario = document.getElementById('comentarios');
    var nombre = formulario.nombre;
    var texto = formulario.textarea;
    
    if(nombre.value.length == 0 || nombre.value == null || /^\s+$/.test(nombre.value)){
        alert("El nombre no puede estar vacío.");
        nombre.value="";
        nombre.focus();
        return false;
    }
    else if(nombre.value.length > 15){
        alert("Nombre/Alias demasiado largo.")
        nombre.focus();
        return false;
    }
    else if(texto.value.length == 0 || texto.value == null || /^\s+$/.test(texto.value)){
        alert("El comentario no puede estar vacio.");
        texto.value="";
        Contador();
        texto.focus();
        return false;  
    }
    return true;
}


function Anyadir(Event){
     var formulario = document.getElementById('comentarios');
    var nombre = formulario.nombre;
    var texto = formulario.textarea;
    if(!Comprobar()){
        return false;
    }
    /*CREAR ELEMENTO*/
    var hoy= new Date;
    var fecha = hoy.getDate()+"/"+(hoy.getMonth()+1) + "/" + hoy.getFullYear();
    var p = document.createElement('p');
    p.id= pe+ ids;
    var div = document.createElement('div');
    
    
    var button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Borrar';
    button.id = coment + ids;
    button.className = 'borrarComent';
    button.addEventListener('click', BorrarComent);
    
    var buttonEdita = document.createElement('button');
    buttonEdita.type = 'button';
    buttonEdita.innerText = 'Editar';
    buttonEdita.id = edita + ids;
    buttonEdita.className = 'borrarComent';
    buttonEdita.addEventListener('click', Editar);
   
    var br = document.createElement('br');
    var section = document.getElementById('divComentarios');
    p.innerHTML = texto.value;
    var h5 = document.createElement('h5');
    h5.id=h+ids;
    h5.innerHTML = nombre.value + " - "+ fecha;
    p.className = "publicado";
    
    div.appendChild(br);
    div.appendChild(p);
    div.appendChild(h5);
    div.appendChild(button);
    div.appendChild(buttonEdita);
    div.appendChild(br);
    div.appendChild(br);
    section.appendChild(div);
    
    nombre.value="";
    texto.value="";
    
    ids++;
    Contador();
    return true;
    
   
}

function BorrarComent(event){
    
    if(confirm('¿Desea elemiminar el comentario?')){
        var padre = event.target.parentNode;
        var node = event.target.id;
        padre.remove(node);
    }
}

function Editar(event){
    if(confirm('¿Desea modificar el comentario?')){
        var formulario = document.getElementById("comentarios");
       var padre = event.target.parentNode;
        var node = event.target.id;
        var num = node.substring(4,5);
        var name = formulario.nombre;
        var nombre = document.getElementById(h + num).textContent;
        name.value = nombre.split(" ")[0];
        var comentario = document.getElementById("writecoment");
        var p = document.getElementById(pe + num).textContent;
        comentario.value = p;
        Contador();
        padre.remove(node);
    }
}