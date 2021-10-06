import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {


    return (
        <>
            <h2>Vehículos disponibles</h2>
            <div className="producto">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
            </div>
        </>
    )
}