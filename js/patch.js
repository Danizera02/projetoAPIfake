function obterValorInput() {
  let idProduto = document.getElementById("idProduto");
  let valorCampo = document.getElementById("valorCampo");
  let selectCampo = document.getElementById("selectCampo");

  const data = {
    Campo: selectCampo.value,
    Valor: valorCampo.value
  }

  fetch(`https://fakestoreapi.com/products/${idProduto.value}`, {
    method: "PATCH",
    body: JSON.stringify({
      data
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

let btnEnviar = document.getElementById("botaoEnviar_editar");
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  obterValorInput();

  alert("O produto foi editado!")
});
