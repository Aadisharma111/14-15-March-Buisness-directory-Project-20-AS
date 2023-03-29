import { faHome, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { URL } from '../helpers/helper'

export default function SearchFilter() {
    //2.1
    const [searchParams, setSearchParams] = useSearchParams()
    
    useEffect(()=>{
        console.log('cat_name----------->',searchParams.get('cat_name'));
        fetch(`${URL}/api/buisnesses?populate=*&filters[buisness_categories][name][$contains]=${searchParams.get('cat_name')}`)
        .then(res=>res.json())
        .then(data=>{})
        .catch(err=>{
            console.log(err)
        })

        

    },[]);
    //2.2

    return (
        <>
            <Row>
                <Col sm={9}>
                    <h1>Search Filter</h1>
                    {
    
                }
                    <Card className="p-5 mb-4">
                        <Row>
                            <Col sm={4}>
                                <Card.Img className="img-fluid" variant="top" src="https://images.jdmagicbox.com/comp/jaipur/n7/0141px141.x141.220704203116.r6n7/catalogue/club-alpha-c-scheme-jaipur-restaurants-v5sl62b4ht.jpg?temp=1" />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>Hotel Highway king</Card.Title>
                                    <Badge bg="success"> 3.4</Badge>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                        <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                    </span>
                                    <span> 1,551 Rating</span>
                                    <Card.Text>
                                        hey bro get set go for a healthy dishes
                                    </Card.Text>
                                    <a href='tel:+91 9826991220' className="btn btn-success" >+91 9826991220</a>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="p-5 mb-4">
                        <Row>
                            <Col sm={4}>
                                <Card.Img className="img-fluid" variant="top" src="https://images.jdmagicbox.com/comp/jaipur/n7/0141px141.x141.220704203116.r6n7/catalogue/club-alpha-c-scheme-jaipur-restaurants-v5sl62b4ht.jpg?temp=1" />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>Hotel Highway king</Card.Title>
                                    <Badge bg="success"> 3.4</Badge>
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
                                    <a href='tel:+91 9826991220' className="btn btn-success" >+91 9826991220</a>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card> <Card className="p-5 mb-4">
                        <Row>
                            <Col sm={4}>
                                <Card.Img className="img-fluid" variant="top" src="https://images.jdmagicbox.com/comp/jaipur/n7/0141px141.x141.220704203116.r6n7/catalogue/club-alpha-c-scheme-jaipur-restaurants-v5sl62b4ht.jpg?temp=1" />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>Hotel Highway king</Card.Title>
                                    <Badge className="p-2 fs-5" bg="YEAH">2.2</Badge>
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
                                    <a href='tel:+91 9826991220' className="btn btn-success" >+91 9826991220</a>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card> <Card className="p-5 mb-4">
                        <Row>
                            <Col sm={4}>
                                <Card.Img className="img-fluid" variant="top" src="https://images.jdmagicbox.com/comp/jaipur/n7/0141px141.x141.220704203116.r6n7/catalogue/club-alpha-c-scheme-jaipur-restaurants-v5sl62b4ht.jpg?temp=1" />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>Hotel Highway king</Card.Title>
                                    <Badge bg="success"> 3.4</Badge>
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
                                    <a href='tel:+91 9826991220' className="btn btn-success" >+91 9826991220</a>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card> <Card className="p-5 mb-4">
                        <Row>
                            <Col sm={4}>
                                <Card.Img className="img-fluid" variant="top" src="https://images.jdmagicbox.com/comp/jaipur/n7/0141px141.x141.220704203116.r6n7/catalogue/club-alpha-c-scheme-jaipur-restaurants-v5sl62b4ht.jpg?temp=1" />
                            </Col>
                            <Col sm={8}>
                                <Card.Body>
                                    <Card.Title>Hotel Highway king</Card.Title>
                                    <Badge bg="success"> 3.4</Badge>
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
                                    <a href='tel:+91 9826991220' className="btn btn-success" >+91 9826991220</a>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '19rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>*Cuisines*
                                Desserts, Chinese, Mughlai, North Indian, Italian, Continental, Thai, Fast Food</ListGroup.Item>
                            <ListGroup.Item>Mode of Payment Cash, BHIM, Credit Card, Debit Cards, Paytm, PhonePe, UPI, Visa Card, Cheque</ListGroup.Item>
                            <ListGroup.Item>@just Enjoy our Meal</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>


        </>

    )
}