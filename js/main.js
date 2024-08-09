import { mostrarProduto } from './Get.js'

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    var dataJ = json;
    console.log(dataJ);

    mostrarProduto(dataJ)
    
  });
