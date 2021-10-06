import { stock } from "../datos/stock"


export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(stock)
            reject("No hay productos disponibles")
        }, 2000)

    })
}
