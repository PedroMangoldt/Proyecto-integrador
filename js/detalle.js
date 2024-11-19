let queryString = location.search;

let queryStringObjeto = new URLSearchParams(queryString)

let id = queryStringObjeto.get("id")

fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

   let containerRecetas = document.querySelector("div")

    
        containerRecetas.innerHTML += `<article class="recetas"> 
        <h3> ${data.name}</h3>
        <img src= ${data.image}>
        <p> ${data.difficulty} </p>
        <p> 
            <a href="detalle.html?id=${data.id}">Ver detalles </a>
         </p>
        </article>`
    
})
.catch(function(error) {
    console.log("Error cargando recetas:", error);
});