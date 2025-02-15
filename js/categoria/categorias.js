document.addEventListener("DOMContentLoaded", function () {
  const categoryFilter = document.getElementById("category-filter");
  const productsContainer = document.getElementById("products-container");
  const productItems = productsContainer.getElementsByClassName("product-item");

  // Função para filtrar produtos
  const filterProducts = () => {
    const selectedCategory = categoryFilter.value.trim().toLowerCase();

    Array.from(productItems).forEach(item => {
      const itemCategory = item.dataset.category.trim().toLowerCase();
      const showItem = selectedCategory === "" || 
                      selectedCategory === "filtrar por categoria" || 
                      itemCategory === selectedCategory.toLowerCase();

      item.style.display = showItem ? "" : "none";
    });

    // Forçar redesenho do layout
    productsContainer.style.visibility = 'hidden';
    productsContainer.offsetHeight; // Trigger reflow
    productsContainer.style.visibility = 'visible';
  };

  // Event listeners
  categoryFilter.addEventListener("change", filterProducts);
  
  // Filtro inicial
  filterProducts();
});