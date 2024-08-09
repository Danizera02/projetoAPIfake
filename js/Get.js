export function mostrarProduto(produtos) {
    produtos.forEach((produto) => {
  
      let cards = document.querySelector(".cards");
      cards.innerHTML += `  
        <div class="card">
            <img src="${produto.image}" alt="Imagem do Produto" class="card-img" />
            <div class="card-content">
              <h2 class="card-title">${produto.title}</h2>
              <p class="card-price">${produto.price}</p>
              <p class="card-category">Categoria: ${produto.category}</p>
              <p class="card-description">
                Descrição: ${produto.description}
              </p>
            </div>
        </div> `;
    });
  }