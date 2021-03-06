import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase/config'
import './styles.css'

export const ItemListContainer = () => {

    let Spinner = require('react-spinkit');
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {idCategoria} = useParams()


    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const productos = idCategoria 
                            ? db.collection('autos').where('categoria', '==', idCategoria)
                            : db.collection('autos')

        productos.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })

                setItems(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )
        
    }, [idCategoria, setLoading])

    
    return (
        <div>
            {
                loading ? <h2 id='spinner'><Spinner name='pacman' color='gold' />Cargando...</h2> : <ItemList productos={items}/>
            }
            
        </div>
    )
}
