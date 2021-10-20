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

    return (
        <div>
            <h2>{auto}</h2>
            <img src={img} alt={auto}/>
            <p>{motor}</p>
            <p>{potencia}</p>
            <h3>Precio: ${precio}</h3>

            <button className="btn btn-primary" onClick={() => goBack()}>
                Volver
            </button>
            { isInCart(id) ? <Link to="/cart" className="btn btn-success">Finalizar compra</Link>
                :
                    <>
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                        <button
                            className="btn btn-success my-2"
                            onClick={handleAgregar}
                            >
                            Agregar
                        </button>
                    </>
            }

            <button onClick={() => push("/")}>
                Volver al inicio
            </button>
        </div>
    )
}