
let queryString = location.search;

let queryStringObjeto = new URLSearchParams(queryString)

let category = queryStringObjeto.get("category")
let containerRecetas = document.querySelector(".containerRecetas")
let titulo = document.querySelector("h1")
titulo.innerText+=category
fetch(`https://dummyjson.com/recipes/tag/${category}`)

.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
    recetas = data.recipes
    for(let i = 0;i< recetas.length;i++){
        containerRecetas.innerHTML += `<article class="recetas"> 
        <h3> ${recetas[i].name}</h3>
        <img src= ${recetas[i].image}>
        <p> ${recetas[i].difficulty} </p>
        <p> 
            <a href="detalle.html?id=${recetas[i].id}">Ver detalles </a>
         </p>
        </article>`
    }
})
.catch(function(error) {
    console.log("Error cargando recetas:", error);
});

let formulario = document.querySelector('.busqueda')
let input = document.querySelector('.busqueda input')
formulario.addEventListener('submit',function(evento){
    evento.preventDefault()
    if(input.value.length<3){
        alert("Escribir mas de 3 caracteres")
    }
    else{
        this.submit()
    }

})