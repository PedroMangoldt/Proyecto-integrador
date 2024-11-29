let formulario = document.querySelector(".formI")
let email = document.querySelector(`#email`)
let contraseña = document.querySelector(`#contraseña`)
let errorEmail = document.querySelector(`.email`)
let errorContraseña = document.querySelector(`.contraseña`)


formulario.addEventListener(`submit`,function(evento){
    evento.preventDefault()
    if(email.value == ``){
        alert("completa el mail")
}
    else if (contraseña.value == ``){
        alert("completa la contraseña") 
}
    else {
        formulario.submit()
    }
})