
let categoriasContainer = document.querySelector(".categorias-list")



fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

    for (let i = 0; i< data.length; i++) {
        categoriasContainer.innerHTML += `
                <li class="categorias-item">
                <h2>${data[i]}</h2>
                <a href="category.html?category=${data[i]}" class="view-recipes"> Ver recetas </a>
                </li>`
            ;
    }
})
    .catch(function (error) {
        console.log('Error al cargar las categorías:', error);
})

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