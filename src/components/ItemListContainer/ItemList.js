import React from 'react'
import { Item } from './Item'
import "./styles.css"

export const ItemList = ( {productos = []} ) => {


    return (
        <>
            <h3>Vehículos disponibles</h3>
            <div className="producto">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
            </div>
        </>
    )
}