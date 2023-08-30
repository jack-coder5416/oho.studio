import React from 'react'
import './Body.css'
import ImageCard from '../util/ImageCard'
import { Container, Row, Col } from'react-bootstrap';
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpeg'

export default function Body() {
  return (
    <div className='head-body-container'>
        <div className='body-container'>
            <h3 className='heading-top'>A brand and product designer working with clients globally</h3>
            <div className='heading-below'>
                <h4>
                    Expertise
                </h4>
                <span className="pill-shadow">Branding</span>
                <span className="pill-shadow">Product</span>
                <span className="pill-shadow">Design Systems</span>
            </div>
        </div>
        <div className='grid-body-container'>
            <Container className='container'>
                <Row className='row'>
                    <Col>
                        <ImageCard imageUrl={card1}/>
                    </Col>
                    <Col>
                        <ImageCard imageUrl={card2}/>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col>
                        <ImageCard imageUrl={card1}/>
                    </Col>
                    <Col>
                        <ImageCard imageUrl={card2}/>
                    </Col>
                </Row >
                <Row className='row'>
                    <Col>
                        <ImageCard imageUrl={card1}/>
                    </Col>
                    <Col>
                        <ImageCard imageUrl={card2}/>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}
