const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

async function fetchData() {
    const response = await fetch("https://products-api-2ttf.onrender.com/api/products");
    const data = await response.json();
    return data;
}
