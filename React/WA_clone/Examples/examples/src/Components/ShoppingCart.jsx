function ShoppingCart() {
    const cart = ["Apple", "Oranges", "Brocoli", "Grapes"];
    return <ul>{cart.map((elem, index) => {
        return <li key={index}>
            <div>{elem}</div>
            <button>Click</button>
        </li>
    })}</ul>
}
export default ShoppingCart;