let categorias = data.recipes;
let categoriasContainer = document.querySelector (".categorias-container")



fetch(`https://dummyjson.com/recipes/meal-type/snack`)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

    for (let i = 0; i< categorias.length; i++) {
        categoriasContainer.innerHtml += `
                <ul class="categorias-list">
                <h2>${categorias[i].name}</h2>
                <a href="recetas.html?category=${categorias[i].id}" class="view-recipes"> Ver recetas </a>
                </ul>`
            ;
    }
})
    .catch((error) => {
        console.error('Error al cargar las categorías:', error);
})