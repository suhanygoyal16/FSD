const cartBox = document.getElementById("cart-box");

const loadCartItems = () => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

    if (!savedCart.length) {
        cartBox.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    savedCart.forEach((item) => {
        const itemCard = document.createElement("div");
        itemCard.className = "cart-item";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;

        const textBox = document.createElement("div");
        textBox.className = "cart-text";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const price = document.createElement("p");
        price.textContent = `Price: $${item.price}`;

        const count = document.createElement("p");
        count.textContent = `Qty: ${item.qty}`;

        textBox.appendChild(title);
        textBox.appendChild(price);
        textBox.appendChild(count);
        itemCard.appendChild(image);
        itemCard.appendChild(textBox);
        cartBox.appendChild(itemCard);
    });
};

loadCartItems();