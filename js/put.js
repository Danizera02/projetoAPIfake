function obterValorInput() {
  let idProduto = document.getElementById('idProduto')
  let tituloProduto = document.getElementById("titulo");
  let preco = document.getElementById("preco");
  let descricao = document.getElementById("descricao");
  let imagem = document.getElementById("imagem");
  let categoria = document.getElementById("categoria");

  fetch(`https://fakestoreapi.com/products/${idProduto.value}`, {
    method: "PUT",
    body: JSON.stringify({
      title: tituloProduto.value,
      price: preco.value,
      description: descricao.value,
      image: imagem.value,
      category: categoria.value,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

let btnEnviar = document.getElementById("botaoEnviar_editar");
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  obterValorInput();
  alert("O produto foi editado")
});
