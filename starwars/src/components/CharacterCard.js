//Parent === App.js
import React from "react";
import {Card, CardTitle, CardText, Col, CardBody, CardSubtitle} from "reactstrap"; 

// Going to start with styling it that way I don't have to go back and refactor 
const CharacterCard = props => {
    return (
        <Col xs="6">
            <Card style={{margin:"10px", opacity:"0.9", backgroundColor:"Tan", color:"white"}}>
                <CardBody>
                    <CardTitle tag="h4">{props.name}</CardTitle>
                    <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                    <CardText>Hair Color: {props.hair}</CardText>
                    <CardText>Eye Color: {props.eyes}</CardText>
                    <CardText>Height: {props.height}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCard;


