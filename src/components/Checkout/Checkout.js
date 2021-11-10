import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { generarOrden } from '../../firebase/generarOrden'
export const Checkout = () => {

    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nombre inválido',
              })
            return
        }
        if (values.apellido.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Apellido inválido',
              })
            return
        }
        if (values.email.length < 3) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email inválido',
              })
            return
        }
        if (values.tel.length < 7) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Teléfono inválido',
              })
              
            return
        }

        generarOrden(values, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden registrada con éxito!',
                    text: `Guarde su id de compra: ${res}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Productos sin stock',
                    text: `No hay stock de: ${err.map(el => el.name).join(', ')}`
                })
            })
            .finally(() => {
            })
    }

    return (
        <>
            {carrito.length === 0 && <Redirect to="/"/>}

            <div>
                <h2>Complete sus datos</h2>
                <hr/>
                <div className="container my-5">
                <form onSubmit={handleSubmit}>
                    <h2>Formulario</h2>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        />
                    {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleInputChange}
                        />
                    {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="tel"
                        placeholder="Teléfono"
                        name="tel"
                        value={values.tel}
                        onChange={handleInputChange}
                    />
                    {values.tel.length === 0 && <small>Este campo es obligatorio</small>}
                    <br/>
                    <br/>

                    <button className="btn btn-success" type="submit">Finalizar</button>
                </form>
            </div>
            </div>
        </>
    )
}