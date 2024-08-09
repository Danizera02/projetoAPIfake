function obterValorInput() {
  let tituloProduto = document.getElementById("titulo");
  let preco = document.getElementById("preco");
  let descricao = document.getElementById("descricao");
  let imagem = document.getElementById("imagem");
  let categoria = document.getElementById("categoria");

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: tituloProduto.value,
      price: preco.value,
      description: descricao.value,
      image: imagem.value,
      category: categoria.value,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);

      if (json.id == 21) {
        alert("Produto adicionado");
      } else {
        alert("Erro ao adicionar o produto");
      }
    });
}

let btnEnviar = document.getElementById("botaoEnviar");
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  obterValorInput();
  alert("O produto foi adicionado")
});



