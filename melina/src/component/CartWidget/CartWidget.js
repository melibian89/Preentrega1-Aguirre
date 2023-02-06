import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'




const CartWidget = () => {

    const { totalCantidad, cart } = useCartContext()

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <BsCart4 />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget