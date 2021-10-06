import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../request/pedirProductos'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
                console.log("Terminado")
            })

    }, [])

    return (
        <div>
            {
                loading ? <h2>Cargando...</h2> : <ItemList productos={items}/>
            }
            
        </div>
    )
}
