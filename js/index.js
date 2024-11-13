fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(console.log);

let listaRecetas = document.querySelector