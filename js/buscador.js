let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString)
let extraer = queryStringObjeto.get("query")
let containerRecetas = document.querySelector('.container-recetas')

fetch(`https://dummyjson.com/recipes/search?q=${extraer}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
    let recetas = data.recipes
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