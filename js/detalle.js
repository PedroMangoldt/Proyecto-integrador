let queryString = location.search;

let queryStringObjeto = new URLSearchParams(queryString)

let id = queryStringObjeto.get("id")

fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
   let nombre = document.querySelector('h1');
   nombre.innerText += data.name; 
   let instrucciones = document.querySelector(".Inst");
   instrucciones.innerText += data.instructions;
   let tiempo = document.querySelector(".Tiemp");
   tiempo.innerText += data.prepTimeMinutes;
   let imagen = document.querySelector('img');
   imagen.src = data.image;   
})
.catch(function(error) {
    console.log("Error cargando recetas:", error);
});