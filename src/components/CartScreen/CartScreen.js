import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)


    return (
        <div className="container my-5">

            {
                carrito.length === 0
                ? <>
                    <h2>No hay productos agregados</h2>
                    <Link to="/" className="btn btn-success">Ir a comprar</Link>
                 </>
                :
                    <>
                        <h2>Resumen de carrito</h2>
                        <hr/>

                        {
                            carrito.map( (prod) => (
                                <div>
                                    <h4>{prod.auto}</h4>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio: {prod.precio * prod.cantidad}</p>
                                    <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                                </div>
                            ))
                        }

                        <hr/>
                        <h3 className="my-3">Precio total: ${calcularTotal()}</h3>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                    </>
            } 

        </div>
    )
}