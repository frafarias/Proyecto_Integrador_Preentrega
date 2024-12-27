// Captura de elementos de Contacto

let capturainputName= document.getElementById("inputName")
let capturainputApellido= document.getElementById("inputApellido")
let capturaLabelName= document.getElementById("labelName")
let capturaBotonEnviar=document.getElementById("botonEnviar")
let capturaidTextArea=document.getElementsByName("Comentarios")
// Captura de elementos de Registro
let capturaBotonRegistro=document.getElementById("botonRegistro")
let capturaRegistroNombre=document.getElementById("registroNombre")
let capturaRegistroApellido=document.getElementById("registroApellido")
let capturaRegistroDni=document.getElementById("registroDni")
let capturaRegistroEmail=document.getElementsByName("Email")
let capturaBotonReset2=document.getElementById("botonReset2")
// Captura de elementos para mostrar registro
let capturaNombreRegistro=document.getElementById("nombreRegistro")
let capturaApellidoRegistro=document.getElementById("apellidoRegistro")
let capturaIdentificacion=document.getElementById("identificacion")

//Captura varias
let capturaMostrarRegistro=document.getElementById("mostrarRegistro")
let capturaDivMostrarRegistro = document.getElementById("divMostrarRegistro")
let capturaTituloRegistro = document.getElementById("tituloRegistro")



//Imprimo los elementos para estar seguro
// console.log(capturainputName)
// console.log(capturainputApellido)
// console.log(capturaLabelName)
// console.log(capturaBotonEnviar)
// console.log(capturaidTextArea)

console.log(capturaBotonRegistro)
console.log(capturaRegistroNombre)
console.log(capturaRegistroApellido)
console.log(capturaRegistroDni)
console.log(capturaRegistroEmail)
console.log(capturaBotonReset2)

console.log(capturaNombreRegistro)
console.log(capturaApellidoRegistro)
console.log(capturaIdentificacion)

console.log(capturaMostrarRegistro)
console.log(capturaDivMostrarRegistro)
console.log(capturaTituloRegistro.textContent)


//MODULO DE REGISTRO DE USUARIO

capturaBotonRegistro.addEventListener("click",registrar)

capturaBotonReset2.addEventListener("click",researtRegistro)
//Designo variables
var nombreLocal 
var apellidoLocal
var dniLocal
//Imprimo variables almacenadas en localStore
console.log(localStorage.getItem("nombre"))
console.log(localStorage.getItem("apellido"))
console.log(localStorage.getItem("dni"))

nombreLocal = localStorage.getItem("nombre")
apellidoLocal = localStorage.getItem("apellido")
dniLocal = localStorage.getItem("dni")

capturaNombreRegistro.textContent = "Nombre del Pasajero: " + nombreLocal
capturaApellidoRegistro.textContent = "Apellido del Pasajero: " + apellidoLocal
capturaIdentificacion.textContent = "Identificación: " + dniLocal

// localStorage.clear()

function registrar(){
    // console.log(capturaRegistroNombre.value)
    // console.log(capturaRegistroApellido.value)
    // console.log(capturaRegistroDni.value)
    // console.log(capturaRegistroEmail[0].value)

    // console.log(capturaNombreRegistro.textContent)
    // console.log(capturaApellidoRegistro.textContent)
    // console.log(capturaIdentificacion.textContent)
   
    capturaTituloRegistro.textContent = "Registro Satisfactorio"
    capturaNombreRegistro.textContent = "Nombre del Pasajero: " + capturaRegistroNombre.value
    capturaApellidoRegistro.textContent = "Apellido del Pasajero: " + capturaRegistroApellido.value
    capturaIdentificacion.textContent = "Identificación: " + capturaRegistroDni.value

    var nombreLocal = localStorage.setItem("nombre",capturaRegistroNombre.value)
    var apellidoLocal = localStorage.setItem("apellido",capturaRegistroApellido.value)
    var dniLocal = localStorage.setItem("dni",capturaRegistroDni.value)

}

function researtRegistro(){
    capturaRegistroNombre.value = ""
    capturaRegistroApellido.value = ""
    capturaRegistroDni.value = ""
    capturaRegistroEmail[0].value = ""
    capturaRegistroEmail[1].value = ""
    // capturaEmailRegistro[0].value = ""
}


function mostrar() {console.log("esta funcionando la prueba")}



//Eventos con AddEVENLISTENER
// capturaBotonEnviar.addEventListener("click",function(){
// console.log(capturainputName.value+ " "+capturainputApellido.value)    
// console.log(parseInt(capturainputName.value)+parseInt(capturainputApellido.value))    
// })

// capturaBotonEnviar.addEventListener("click", mostrarTextArea)

// function mostrarTextArea(){
//     console.log (capturaidTextArea[0])
//     console.log (capturaidTextArea[0].textContent)
//     capturaidTextArea[0].textContent=(parseInt(capturainputName.value)+parseInt(capturainputApellido.value))
//     console.log(parseInt(capturainputName.value)+parseInt(capturainputApellido.value))
// }