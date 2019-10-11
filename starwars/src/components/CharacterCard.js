//Parent === App.js
import React from "react";
import {Card, CardTitle, CardText, Col, CardBody, CardSubtitle} from "reactstrap"; 

// Going to start with styling it that way I don't have to go back and refactor 
const CharacterCard = props => {
    return (
        <Col xs="6">
            <Card outline="warning">
                <CardBody>
                    <CardTitle tag="h4">{props.name}</CardTitle>
                    <CardSubtitle>{props.gender}</CardSubtitle>
                    <CardText>{props.hair_color}</CardText>
                    <CardText>{props.eye_color}</CardText>
                    <CardText>{props.height}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCard;


