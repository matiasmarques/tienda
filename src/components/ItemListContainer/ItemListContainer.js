import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../request/pedirProductos'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {idCategoria} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {
                if (idCategoria) {
                    setItems( res.filter( prod => prod.categoria === idCategoria) )
                } else {
                    setItems( res )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
                console.log("Terminado")
            })
    }, [idCategoria])

    
    return (
        <div>
            {
                loading ? <h2>Cargando...</h2> : <ItemList productos={items}/>
            }
            
        </div>
    )
}
