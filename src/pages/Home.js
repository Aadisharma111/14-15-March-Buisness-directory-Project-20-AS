import React, { useEffect, useState } from 'react'
import { Carousel, Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Footer from '../component/ui/Footer'
import Header from '../component/ui/Header'
import { URL } from '../helpers/helper';
import Img2 from '../assest/img/slider/2.png'
import Img3 from '../assest/img/slider/3.png'
import Img4 from '../assest/img/slider/4.png'


export default function Home() {
    //2.1 Hooks Area
    const [businessCategory, setBusinessCategory] = useState([]);
    const [mainSlider, setMainSlider] = useState([]);


    useEffect(() => {
        fetch(`${URL}/api/buisness-categories?populate=*`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setBusinessCategory(data.data);
            })
            .catch(() => {

            });
    }, []);


    //2.2
    fetch(`${URL}/api/website-frontend?populate[mainSlider][populate]=*`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log('mainSlidercomponent---->',data.data.attributes.mainSlider)
        setMainSlider(data.data.attributes.mainSlider);
    })
    .catch(()=>{

    });



    //2.3
      
    return (
        <>
            <h1>Welcome To Our Home Page</h1>
            <Row >
                <Col className="b_tbdr mb-5" xs={6}>  
                 <Carousel>
                    <Carousel.Item>
                        
                        <img
                            className="d-block w-100"
                            src={Img2}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img3}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img4}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel></Col>
                <Col className="b_tbdr" xs={6}>Y</Col>
            </Row>
            <ul className="nav">
                {
                    businessCategory.map((cv, idx, arr) => {
                        return <li key={idx} className="mean-2">
                            <Link to={"/search?cat_name=" + cv.attributes.name}>
                                <img src={URL + cv.attributes.image.data.attributes.url} /><br />
                                {cv.attributes.name}
                            </Link>
                        </li>

                    })
                }


            </ul>
        </>
    )
}
