import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'



export const ItemDetail = ({ id, auto, precio, img, motor, potencia, categoria, stock} ) => {

    const {goBack, push} = useHistory()
    const {addToCart, isInCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            id,
            auto,
            precio,
            categoria,
            cantidad
        }

    if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    const styles = {
        btnAgregar: isInCart(id) ? "btn btn-danger m-2" : "btn btn-success m-2",
        btnTerminar: `btn btn-success ${!isInCart(id) && "desactivado"}`
    }

    return (
        <div>
            <h2>{auto}</h2>
            <img src={img} alt={auto}/>
            <p>{motor}</p>
            <p>{potencia}</p>
            <h3>Precio: ${precio}</h3>

            <div className={isInCart(id) && "desactivado"}>
                <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                <button
                    disabled={cantidad === 0}
                    className={styles.btnAgregar}
                    onClick={handleAgregar}
                    >
                    Agregar al carrito
                </button>
            </div>

            <Link to="/cart" className={styles.btnTerminar}>Terminar mi compra</Link>
            <button className="btn btn-primary" onClick={() => goBack()}>
                Volver
            </button>
            <br/>

            <button onClick={() => push("/")}>
                Volver al inicio
            </button>
        </div>
    )
}