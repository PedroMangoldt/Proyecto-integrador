let formulario = document.querySelector("form")

let campoEmail = document.querySelector("#email")

let campoContraseña = document.querySelector("#contraseña")

formulario.addEventListener(`submit`,function(evento){
    evento.preventDefault()
})