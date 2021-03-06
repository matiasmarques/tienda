import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { getFirestore } from '../../firebase/config'
import '../ItemListContainer/styles.css'

export const ItemDetailContainer = () => {

    let Spinner = require('react-spinkit');
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('autos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [itemId, setLoading])
    

    return (
        <div>
            {
                loading ? <h2 id='spinner'><Spinner name='pacman' color='gold' />Cargando...</h2> : <ItemDetail {...item}/>
            }
        </div>
    )
}