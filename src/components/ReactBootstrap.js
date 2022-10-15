import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function ReactBootstrap() {
    return (
        <Card style={{ width: "20rem", background:"#333", color:"white" }}>
            <Card.Img variant='top' src="img/sarkermajid.jpg"></Card.Img>
            <Card.Body >
                <Card.Title>Sarker Majid</Card.Title>
                <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Card.Text>
                <Button variant='success' >Learn More</Button>
            </Card.Body>
        </Card>
    )
}
