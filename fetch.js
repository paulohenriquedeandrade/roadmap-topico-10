async function fetchProducts() {
    try {
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

        if (!response.ok) {
            throw new Error(`Erro de HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data[0].name);
    } catch (error) {
        console.error(`Não foi possível obter os produtos: ${error}`);
    }
}

fetchProducts();