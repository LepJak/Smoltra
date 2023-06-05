import React from "react";
import Card from 'react-bootstrap/Card';
import { Button, Row, Col } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import emptyImage from "../../images/defaultImageForNews.jpg";
import CustomCarousel from "../CustomComponents/CustomCarousel/CustomCarousel";
import ProductCard from "../Products/ProductCard";
import CarouselBeta from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import nextImage from "../../images/next.png";
import ".//style.css";

const MainPage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 5
        },
        desktop2: {
            breakpoint: { max: 1200, min: 1000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1200, min: 750 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 750, min: 500 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    return (<>
        {/* <div style={{display: 'flex', marginTop:'auto', marginBottom:'auto' ,height:'auto',alignItems: 'center', justifyContent: 'center'}}>

    </div> */}
        <div style={{border: '1px solid black', borderRadius:'5px', backgroundColor:'#d6dbdf36', margin:'0 0 20px 0'}}>
            <h2 style={{ margin: '20px' }}>Новости</h2>
            <Carousel controls={true} style={{ height: '20rem', margin: '20px' }}>
                <Carousel.Item style={{ height: '100%' }} >
                    <Card className="bg-dark text-white" style={{ height: '100%' }} >
                        <Card.Img style={{ height: '20rem', objectFit: 'cover', borderRadius: "5px" }} src={emptyImage} alt="Card image" />
                        <Card.ImgOverlay style={{ height: '100%', width: '100%' }}>
                            <Card.Title style={{ padding: '20px' }}>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item style={{ borderRadius: "5px" }}>
                    <Card style={{ borderRadius: "5px" }} className="bg-dark text-white">
                        <Card.Img style={{ height: '20rem', objectFit: 'cover', borderRadius: "5px" }} src={emptyImage} alt="Card image" />
                        <Card.ImgOverlay style={{ height: '100%' }}>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{ borderRadius: "5px" }} className="bg-dark text-white">
                        <Card.Img style={{ height: '20rem', objectFit: 'cover', borderRadius: "5px" }} src={emptyImage} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text style={{ height: "10rem", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
        <div style={{border: '1px solid black', borderRadius:'5px', backgroundColor:'#d6dbdf36',margin:'0 0 20px 0'}}>
            <h2 style={{ margin: '20px' }}>Лидеры продаж</h2>
            <div>
            </div>

            <CarouselBeta responsive={responsive} renderButtonGroupOutside={false} >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </CarouselBeta>
        </div>
        <div style={{border: '1px solid black', borderRadius:'5px', backgroundColor:'#d6dbdf36'}}>
            <h2 style={{ margin: '20px' }}>Реокмендуем</h2>
            <div>
            </div>

            <CarouselBeta responsive={responsive} renderButtonGroupOutside={false} >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </CarouselBeta>
        </div>

    </>)
}

export default MainPage;