const availableItems = [
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 1.2 },
    { id: 4, name: "Grapes", price: 2.5 },
    { id: 5, name: "Mangoes", price: 3.0 },
];

const cart = [];

const displayItems = () => {
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = "";

    availableItems.forEach((itemElement) => {
        let div = document.createElement("div"); // element
        div.classList.add("item");

        div.innerHTML = `
        <span>${itemElement.name} - $${itemElement.price}</span>
        <button onclick=addToCart(${itemElement.id})>Add</button>
        `;
        itemsContainer.appendChild(div);
    })
}

const addToCart = itemId => {
    const item = availableItems.find(item => item.id === itemId);
    cart.push(item);
    displayCart();
};

const displayCart = () => {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "Cart is empty";
        return;
    }

    cart.forEach((cartElement, index) => {
        let div = document.createElement("div"); // element
        div.classList.add("item");

        div.innerHTML = `
        <span>${cartElement.name} - $${cartElement.price}</span>
        <button onclick=removeFromCart(${index})>Remove</button>
        `;
        cartContainer.appendChild(div);
    })
}

const removeFromCart = index => {
    cart.splice(index, 1);
    displayCart();
}

displayItems(); // call the function to display items