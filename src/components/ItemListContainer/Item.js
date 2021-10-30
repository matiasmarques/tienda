import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';


export const Item = ( {id, auto, precio, img, motor, potencia, categoria} ) => {

    return (

        <Card style={{ width: '18rem' }} className="m-3">
            <CardBody>
                <CardImg top width= "100%" src={img} />
                <CardTitle tag= "h4">{auto}</CardTitle>
                <CardText>Motor: {motor}</CardText>
                <CardText>Potencia: {potencia} CV</CardText>
                <CardText>Precio: USD{precio}</CardText>
                <CardText>Categoria: {categoria}</CardText>
                <Link to={`/detail/${id}`}> 
                    <Button>Reservar</Button>
                </Link>
            </CardBody>
        </Card>
    )
}