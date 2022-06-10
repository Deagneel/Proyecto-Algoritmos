//variables globales
 
var arreglo = [];
var i=0,j=0;
var Velocidad = 100; 
var iteracion; //sirve para guardar el evento de tiempo y poder pararlo
 



 function vel() {
     Velocidad= document.getElementById('vl').value.split(" ");
     if (Velocidad == ""){
        Velocidad = 100;
     }
     document.getElementById('vl').value = "";
 }

function Aleatorio(){
    let palbras = document.getElementById('txt').value.split(" ");
    for (let aux = 0; aux<parseInt(palbras); aux++){
        arreglo[aux] = parseInt(Math.floor((Math.random() * (100 - 0 + 1)) + 0)); //Generamos la cantidad de numeros aleatorios
    }                                                                             //dada por el usuarios entre 0 y 100
    document.getElementById('txt').value = ""; //limpias el array
    comenzar();
}

function LeerDatos(){
    let palbras = document.getElementById('texto').value.split(" ");
    arreglo = arreglo.concat(parseInt(palbras)); //Debemos hacer un parseo para reconocer numeros con más de un digito
    document.getElementById('texto').value = ""; //limpias el array
}
 
function comenzar(){

    vel();
    $(document).ready(function(){
 
    imprimirArreglo(arreglo)
 
    });
 
    //comienza la iteracion con velocidad determinada de segundo cada iteración
    iteracion=setInterval(burbuja,Velocidad);
 
    //desabilitamos boton
    $("#botonsito").prop("disabled",true)
    $("#bot").prop("disabled",true)
    $("#an").prop("disabled",true)
 
}
 
//funcion que plasma el arreglo para poder ser visualizado
function imprimirArreglo(){
 
    //borramos el contenido del div del contenido
    $("#contenido").html("");
 
    //imprimimos los elementos en forma de div
    for(i_=0;i_<arreglo.length;i_++){
 
        //anexamos un div con clase bloque
        $("#contenido").append("<div class='bloque'>"+arreglo[i_]+"</div>");

    }
 
}
 
function burbuja(){
    //recorreremos todos los elementos hasta n-1
    if(i<arreglo.length){
 
        //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        if(j<(arreglo.length-i)){
 
            //comparamos
            if(arreglo[j]>arreglo[j+1]){
                 //guardamos el numero mayor en el auxiliar
                 aux=arreglo[j];
                 //guardamos el numero menor en el lugar correspondiente
                 arreglo[j]=arreglo[j+1];
                 //asignamos el auxiliar en el lugar correspondiente
                 arreglo[j+1]=aux;
 
            }
 
            j++;
        }else{
            j=0;
            i++;
        }
 
    }else{
        //aqui se termina el algoritmo por lo cual paramos el setInterval
        clearInterval(iteracion);
 
    }
 
    //imprimimos el arreglo en cada iteración
    imprimirArreglo()
 
}