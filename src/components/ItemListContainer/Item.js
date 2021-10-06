import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';


export const Item = ( {id, auto, precio, img, motor, potencia} ) => {

    return (

        <Card>
            <CardBody>
                <CardImg top width= "100%" src={img} />
                <CardTitle tag= "h4">{auto}</CardTitle>
                <CardText>{motor}</CardText>
                <CardText>{potencia} CV</CardText>
                <CardText>Precio: USD{precio}</CardText>
                <Button>Reservar</Button>
            </CardBody>
        </Card>
    )
}