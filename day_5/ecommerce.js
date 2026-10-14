const productList = document.getElementById("product-list");
let allItems = [];

const loadProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        allItems = data.products;
        renderProducts();
    } catch (error) {
        productList.innerHTML = "<p>Products could not be loaded right now.</p>";
    }
};

const saveCart = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
};

const renderProducts = () => {
    productList.innerHTML = "";

    allItems.forEach((item) => {
        const card = document.createElement("div");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = item.thumbnail;
        image.alt = item.title;

        const name = document.createElement("h3");
        name.textContent = item.title;

        const price = document.createElement("p");
        price.textContent = `$${item.price}`;

        const controls = document.createElement("div");
        controls.className = "qty-controls";

        const minusButton = document.createElement("button");
        minusButton.textContent = "-";

        const countValue = document.createElement("span");
        countValue.textContent = "0";

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";

        let itemCount = 0;

        const updateCart = () => {
            const savedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
            const existingItem = savedCart.find((entry) => entry.title === item.title);

            if (existingItem) {
                existingItem.qty = itemCount;
            } else {
                savedCart.push({
                    title: item.title,
                    price: item.price,
                    image: item.thumbnail,
                    qty: itemCount
                });
            }

            const cleanedCart = savedCart.filter((entry) => entry.qty > 0);
            saveCart(cleanedCart);
        };

        minusButton.addEventListener("click", () => {
            if (itemCount > 0) {
                itemCount -= 1;
                countValue.textContent = itemCount;
                updateCart();
            }
        });

        plusButton.addEventListener("click", () => {
            itemCount += 1;
            countValue.textContent = itemCount;
            updateCart();
        });

        controls.appendChild(minusButton);
        controls.appendChild(countValue);
        controls.appendChild(plusButton);
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(controls);
        productList.appendChild(card);
    });
};

loadProducts();