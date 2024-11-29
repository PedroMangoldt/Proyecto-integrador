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
   let imagen = document.querySelector('.img1');
   imagen.src = data.image;
   let categorias = document.querySelector('.Catego')
   categorias.innerText += data.tags;
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