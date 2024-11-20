let categories
let categoriasContainer = document.querySelector (".categorias-container")

let id = queryStringObjeto.get("")

fetch(`https://dummyjson.com/recipes/meal-type/${id}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

    for (let i = 0; i<categories.length; i++) {
        categoriasContainer.innerHtml += `
                <article class="category">
                <h2>${categories[i].name}</h2>
                <a href="recetas.html?category=${categories[i].id}" class="view-recipes"> Ver recetas </a>
                </article>`
            ;
    }
})
    .catch((error) => {
        console.error('Error al cargar las categorías:', error);
})