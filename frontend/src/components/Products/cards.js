import React , {Fragment , useState } from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';

const Cards = (props)=>{
    return(
        <Card className = "card text-center border-primary mb-3" style={{ width: '20rem',margin:'50px'}}>
            <Card.Img variant="top" src={props.product.image} height="300px" width="300px"/>
            <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
            Commodity : {props.product.commodity}<br/>
            Dosage: {props.product.dosage}<br/>
            Stock: {props.product.stock}<br/>
            </Card.Text>
            <Button variant="primary" onClick={() =>props.handleClick(props.product.name,props.product.price)}>Add to Cart &nbsp; <FaIcons.FaShoppingCart/></Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;