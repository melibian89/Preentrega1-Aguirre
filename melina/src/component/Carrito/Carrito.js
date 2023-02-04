import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const CCaarito = () => {

    const { carrito, carritoVacio, totalCarrito, removerItem } = useContext(CartContext)


    if (carrito.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <p>Agrega productos a tu compra!</p>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
                <hr/>

                {
                    carrito.map(item => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.price * item.cantidad}</p>
                            <button onClick={() => removerItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt /></button>
                            <hr/>
                        </div>
                    ))
                }

                <h4>Total: ${ totalCarrito() }</h4>
            
            <button className="btn btn-danger" onClick={carritoVacio}>Vaciar carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Carrito