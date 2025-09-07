import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cart = useSelector((store) => store.cart.items)
    const dispatcher = useDispatch();
    const handleClearCart = () => {
        dispatcher(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            {(cart.length === 0) ? (<h2 className="font-black my-2">Cart is empty. Add items to the cart</h2>) : (
                <div>
                    <div className="w-6/12 mx-auto">
                        <ItemList items={cart} />
                    </div>
                    <button className="border m-2 p-2 border-black rounded-xl" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    )
}
export default Cart;