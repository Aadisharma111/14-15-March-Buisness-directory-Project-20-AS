import { faHome, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'

export default function SearchFilter() {
    return (
        <>
            <Row>
                <Col sm={9}>
                    <h1>Search Filter</h1>
                    <Card className="p-3">
                        <Row>
                            <Col sm={3}>
                                <Card.Img className="img-fluid" variant="top" src="" />
                            </Col>
                            <Col sm={9}>
                                <Card.Body>
                                    <Card.Title>Hotel Highway king</Card.Title>
                                    <Badge className="p-1 fs-3"  bg="YEAH">3.9</Badge> 
                                    <span>
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                            <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                    </span>
                                    <span>1,551 Rating</span>
                                    <Card.Text>
                                        hey bro get set go for a healthy dishes
                                    </Card.Text>
                                    <Button className="btn btn-success" >Show Number</Button>
                                </Card.Body>
                            </Col>
                        </Row>                
                    </Card>  
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '19rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            
            
        </>
        
    )
}