async function loadXML() {
    const response = await fetch('products.xml');
    const xmlText = await response.text();
    const parser = new DOMParser();
    return parser.parseFromString(xmlText, 'application/xml');
}

// Search for a product by code
async function searchProduct() {
    const code = document.getElementById("productCode").value;
    const xmlDoc = await loadXML();
    const products = xmlDoc.getElementsByTagName("product");
    let productFound = false;

    for (let product of products) {
        if (product.getAttribute("code") === code) {
            const name = product.getElementsByTagName("name")[0].textContent;
            const stockStatus = product.getElementsByTagName("stockStatus")[0].textContent;
            const expirationDate = product.getElementsByTagName("expirationDate")[0].textContent;
            const unitPrice = product.getElementsByTagName("unitPrice")[0].textContent;
            const rating = product.getElementsByTagName("rating")[0].textContent;
            
            document.getElementById("productInfo").innerHTML = `
                <h3>${name}</h3>
                <p><strong>Stock Status:</strong> ${stockStatus}</p>
                <p><strong>Expiration Date:</strong> ${expirationDate}</p>
                <p><strong>Unit Price:</strong> $${unitPrice}</p>
                <p><strong>Rating:</strong> ${rating}/5</p>
            `;
            productFound = true;
            break;
        }
    }

    if (!productFound) {
        document.getElementById("productInfo").innerHTML = `<p>Product not found. Please try a different code.</p>`;
    }
}