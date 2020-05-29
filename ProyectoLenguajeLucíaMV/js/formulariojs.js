var andalucia = ['Selecciona','Almería', 'Cádiz', 'Córdoba', 'Granada', 'Huelva', 'Jaén', 'Málaga', 'Sevilla'];
var aragon = ['Selecciona','Huesca', 'Teruel', 'Zaragoza'];
var canarias = ['Selecciona','Las Palmas', 'Santa Cruz de Tenerife'];
var cantabria = ['Selecciona','Cantabria'];
var clmancha = ['Selecciona','Albacete', 'Ciudad Real', 'Cuenca', 'Guadalajara', 'Toledo'];
var cyleon= ['Selecciona','Ávila', 'Burgos', 'León', 'Palencia', 'Salamanca', 'Segovia', 'Soria', 'Valladolid', 'Zamora'];
var galicia = ['Selecciona','A Coruña', 'Lugo', 'Ourense', 'Pontevedra'];
var baleares= ['Selecciona','Cabrera', 'Formentera', 'Ibiza', 'Mallorca', 'Menorca'];
var cataluña= ['Selecciona','Barcelona', 'Girona', 'Lleida', 'Tarragona'];
var madrid = ['Selecciona','Madrid'];
var navarra = ['Selecciona','Navarra'];
var valencia = ['Selecciona','Alicante', 'Castellón', 'Valencia'];
var extremadura= ['Selecciona','Badajoz', 'Cáceres'];
var rioja= ['Selecciona','La Rioja'];
var pvasco= ['Selecciona','Álava', 'Guipuzcoa', 'Vizcaya'];
var asturias = ['Selecciona','Asturias'];
var murcia = ['Selecciona','Murcia'];
var ceuta = ['Selecciona','Ceuta'];
var melilla = ['Selecciona','Melilla'];
window.addEventListener("load", funcioInici,false);

function funcioInici(){
    var enviar = document.getElementById("submit");
    enviar.onclick = funcioConfirmar;
    
    var check = document.getElementById("recibir");
    check.onchange = funcioCheck;
    
    var cauto = document.getElementById("autonoma");
    cauto.onchange = funcioCambio;
}

function funcioCambio(){
    var autonoma = document.getElementById('autonoma');
    var provincia = document.getElementById('provincia');
    provincia.innerHTML = '';
    var indiceAutonoma = autonoma.selectedIndex;
    if(indiceAutonoma == 1){
        generarLista(andalucia,provincia);
    }
    else if(indiceAutonoma == 2){
        generarLista(aragon,provincia);
    }
    else if(indiceAutonoma == 3){
        generarLista(canarias,provincia);
    }
    else if(indiceAutonoma == 4){
        generarLista(cantabria,provincia);
    }
    else if(indiceAutonoma == 5){
        generarLista(clmancha,provincia);
    }
    else if(indiceAutonoma == 6){
        generarLista(cyleon,provincia);
    }
    else if(indiceAutonoma == 7){
        generarLista(cataluña,provincia);
    }
    else if(indiceAutonoma == 8){
        generarLista(ceuta,provincia);
    }
    else if(indiceAutonoma == 9){
        generarLista(madrid,provincia);
    }else if(indiceAutonoma == 10){
        generarLista(navarra,provincia);
    }
    else if(indiceAutonoma == 11){
        generarLista(valencia,provincia);
    }
    else if(indiceAutonoma == 12){
        generarLista(extremadura,provincia);
    }
    else if(indiceAutonoma == 13){
        generarLista(galicia,provincia);
    }
    else if(indiceAutonoma == 14){
        generarLista(baleares,provincia);
    }
    else if(indiceAutonoma == 15){
        generarLista(rioja,provincia);
    }else if(indiceAutonoma == 16){
        generarLista(melilla,provincia);
    }
    else if(indiceAutonoma == 17){
        generarLista(pvasco,provincia);
    }
    else if(indiceAutonoma == 18){
        generarLista(asturias,provincia);
    }
    else if(indiceAutonoma == 19){
        generarLista(murcia,provincia);
    }
    
}

function generarLista(array,tipo){
    tipo.innerHTML = '';
    for(var i = 0; i < array.length; i++){
        var opcion = document.createElement('option');
        opcion.value = array[i];
        opcion.appendChild(document.createTextNode(array[i]));
        tipo.appendChild(opcion);
    }
}



function funcioCheck(Event){
    
    var visible = document.getElementById("notificaciones");
    var check = document.getElementById("recibir");
    if(recibir.checked){
       visible.style.visibility= "visible";
    }
    else{
       visible.style.visibility= "hidden";
    }
}

function Checked(){
     var formulario = document.getElementById('miformulario');
    var aceptar = formulario.aceptar;
    var email = formulario.email;
    
    var tiempo = formulario.publicidad;
    var publi = false;
    for (var j = 0; j <tiempo.length ; j++){
         if(tiempo[j].checked){
            publi = true;
            break;
        }
    }
    
     if(aceptar.checked){
        
        if(email.value.length == 0 || email.value == null || /^\s+$/.test(email.value)){
            alert("El email no puede estar vacio.");
            email.value = "";
            email.focus();
            return false;
        }
        else if (!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email.value)){
            alert("Email incorrecto");
            email.focus();
            return false;
        }
        else if (!publi){
        alert("Debe seleccionarel tiempo.");
        return false;
        }
        
        return true;
    }
    return true;
}

function funcioConfirmar(Event){
    
    var formulario = document.getElementById('miformulario');
    var nombre = formulario.nombre;
    var apellidos = formulario.apellidos;
    var edad = formulario.edad;
    
    var genero = formulario.sexo;
   
    var sexo = false;
    for (var i = 0; i < genero.length; i++){
        if(genero[i].checked){
            sexo = true;
            break;
        }
    }
    
    var comunidad = formulario.autonoma;
    var comunidadSeleccionado = comunidad.selectedIndex;
    var provincia = formulario.provincia;
    var provinciaSeleccionada = provincia.selectedIndex;
    
   if(nombre.value.length == 0 || nombre.value == null || /^\s+$/.test(nombre.value)){
       
        alert("El nombre no puede estar vacío.");
       nombre.value ="";
        nombre.focus();
        return false;
        
    }
    else if(!isNaN(nombre.value)){
        alert("El nombre no pude ser un número.");
        nombre.value ="";
        nombre.focus();
        return false;
    }
    
    else if(edad.value.length == 0 || edad.value == null || /^\s+$/.test(edad.value)){
        alert("La edad no puede estar vacía.");
        edad.value ="";
        edad.focus();
        return false;
    }
    else if(isNaN(edad.value)){
        alert("La edad tiene que ser un número.");
        edad.value ="";
        edad.focus();
        return false;
    }
        
    else if(edad.value < 0){
        alert("La edad no puede ser negativa.");
        edad.value ="";
        edad.focus();
        return false;
    }
    
   else if(!sexo){
        alert("Debe seleccionar un genero.");
        return false;
    }
    else if (comunidadSeleccionado == null || comunidadSeleccionado == ""){
        alert("Debe seleccionar una Comunidad Autonoma.");
        return false;
    }
    else if (provinciaSeleccionada == null || provinciaSeleccionada == 0 ){
        alert("Debe seleccionar una provincia.");
        return false;
    }
    else if (!Checked()){
        return false;
    }
    
        
    alert("ENVIANDO FORMULARIO.");
   
    
    return true;
  
}