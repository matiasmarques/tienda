import React from 'react'
import { useHistory } from 'react-router'




export const ItemDetail = ({ id, auto, precio, img, motor, potencia, categoria} ) => {

    const {goBack, push} = useHistory()


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

            <button onClick={() => push("/")}>
                Volver al inicio
            </button>
        </div>
    )
}