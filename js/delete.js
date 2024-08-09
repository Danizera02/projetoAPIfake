function obterValorInput() {
  let idProduto = document.getElementById("idProduto");

  fetch(`https://fakestoreapi.com/products/${idProduto.value}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

let btnEnviarDeletar = document.getElementById("botaoEnviar_deletar");
btnEnviarDeletar.addEventListener("click", (event) => {
  event.preventDefault();
  obterValorInput();

  alert("O item foi deletado")

});
