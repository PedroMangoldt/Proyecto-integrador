let recetas 
let containerRecetas = document.querySelector('.container-recetas')

let limit = 10
let skip = 0

fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
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
    skip += limit;
})
.catch(function(error) {
    console.log("Error cargando recetas:", error);
});

    let cargar = document.querySelector(".boton-cargar")

    cargar.addEventListener("click", function(){

        fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
            .then(function(response){
                return response.json();
            })

            .then(function(data){
                console.log(data);
                recetas = data.recipes
                for(let i = 0;i<data.recipes.length;i++){
                    containerRecetas.innerHTML += `<article class="recetas"> 
                    <h3> ${recetas[i].name}</h3>
                    <img src= ${recetas[i].image}>
                    <p> ${recetas[i].difficulty}</p>
                    <p> 
                    <a href="detalle.html?id=${recetas[i].id}">Ver detalles </a>
                     </p>
                    </article>`
                }
            })
            skip += limit;

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

