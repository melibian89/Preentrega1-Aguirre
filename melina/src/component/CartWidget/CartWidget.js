import { FaShoppingCart } from 'react-icons/FaShoppingCart'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './CartWidget'

const CartWidget = () => {

    const { totalCantidad, cart } = useCartContext()

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget