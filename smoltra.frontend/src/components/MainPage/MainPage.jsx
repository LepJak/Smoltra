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
import { NavLink } from "react-router-dom";

const MainPage = (props) => {
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
    const state = props.mainPage;
    let lastNews = state.news?.map(x => (<Carousel.Item style={{ height: '100%' }} >
        <NavLink to={'/news/' + x?.id}>
            <Card className="bg-dark text-white" style={{ height: '100%' }} >
                <Card.Img style={{ height: '20rem', objectFit: 'cover', borderRadius: "5px" }} src={emptyImage} alt="Card image" />
                <Card.ImgOverlay style={{ height: '100%', width: '100%' }}>
                    <Card.Title style={{ padding: '0 120px 0 120px ', fontSize: "25px" }}>{x.title}</Card.Title>
                    <Card.Text style={{ padding: '0 90px 0 90px', fontSize: "19px" }}>
                        {x.annotation}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </NavLink>

    </Carousel.Item>))

    const topSales = state?.topSelers?.map(x => <ProductCard product={x} />) ?? []
    console.log(state);
    return (<>
        {/* <div style={{display: 'flex', marginTop:'auto', marginBottom:'auto' ,height:'auto',alignItems: 'center', justifyContent: 'center'}}>

    </div> */}
        <div style={{ border: '1px solid black', borderRadius: '5px', backgroundColor: '#d6dbdf36', margin: '0 0 20px 0' }}>
            <h2 style={{ margin: '20px' }}>Новости</h2>
            <Carousel controls={true} style={{ height: '20rem', margin: '20px' }}>
                {lastNews}
            </Carousel>
        </div>
        <div style={{ border: '1px solid black', borderRadius: '5px', backgroundColor: '#d6dbdf36', margin: '0 0 20px 0' }}>
            <h2 style={{ margin: '20px' }}>Лидеры продаж</h2>
            <div>
            </div>

            <CarouselBeta responsive={responsive} renderButtonGroupOutside={false} >
                {topSales}
            </CarouselBeta>
        </div>

    </>)
}

export default MainPage;