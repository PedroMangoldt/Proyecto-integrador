let recetas 
let containerRecetas = document.querySelector('.container-recetas')

fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
    recetas = data.recipes
    for(let i = 0;i<10;i++){
        containerRecetas.innerHTML+=
        `<article> 
        <h3> ${recetas[i].name}</h3>
        <img src= ${recetas[i].image}>
        <p> ${recetas[i].difficulty} </p>
        
        </article>`
        


    }

})



