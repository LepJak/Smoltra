import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../../App.css";
import "../../fonts/Lack-Regular.otf"
import ".//style.css";
import cartImage from "../../images/cart.png"

const CustomNavbar = () => {
  const expand = "lg";
  return (
    <>  
      <Navbar style={{backgroundColor:'white'}} key={expand} bg="none" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#home" className='fw-bold' style={{ fontSize: '2.9rem', fontFamily: "ffl" }}>Смолтра</Navbar.Brand>
          <Navbar.Toggle style={{ width: '90px' }} aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Меню
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/products">Каталог</Nav.Link>          
                <Nav.Link href="/news">Новости</Nav.Link>        
                <Nav.Link href="/aboutUS">О нас</Nav.Link>         
                <Nav.Link href="/contacts">Контакты</Nav.Link>                    
              </Nav>   
              <Nav className="justify-content-end flex-grow-1 pe-3">              
                <Nav.Link href="/cart"><img class="rounded-circle" style={{height:'25px'}}src={cartImage}/></Nav.Link>
                <Nav.Link href="/cart">Войти</Nav.Link>
                <Nav.Link href="/cart">Регистрация</Nav.Link>
                <Nav.Link href="/orders">Мои заказы</Nav.Link>
              </Nav>      
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
export default CustomNavbar;