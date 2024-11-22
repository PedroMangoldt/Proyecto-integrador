let formulario = document.querySelector("form")
let campoEmail = document.querySelector("#email")
let campoContraseña = document.querySelector("#contraseña")
let errorEmail = document.querySelector(`.email`)
let errorContraseña = document.querySelector(`.contraseña`)

formulario.addEventListener(`submit`,function(evento){
    evento.preventDefault()
    if(email.value == ``){
        console.log(`Complete el campo`)
        errorEmail.innerHTML = " <p> Completar lo requerido </p>"}
    else if (contraseña.value == ``){
        console.log(`Complete el campo`)
        errorContraseña.innerHTML = " <p> Completar lo requerido </p>"}
    else {
        formulario.submit()
    }
})