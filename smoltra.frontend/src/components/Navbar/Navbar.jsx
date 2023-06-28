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
import SignoutOidc from '../../auth/SignoutOidc';
import { signinRedirect, signoutRedirect } from '../../services/userService';
import { useSelector } from 'react-redux';




const CustomNavbar = (props) => {
  const auth = useSelector(state => state.authReducer?.auth);
  const expand = "lg";
  const signOut = () => {
    signoutRedirect({ 'id_token_hint': props?.auth?.user?.id_token })
  }
  const signIn = () => {
    signinRedirect()
  }
  return (
    <>
      <Navbar style={{ backgroundColor: 'white' }} key={expand} bg="none" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/" className='fw-bold' style={{ fontSize: '2.9rem', fontFamily: "ffl" }}>Смолтра</Navbar.Brand>
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
                {
                  auth.role != "Admin" &&
                  props.auth.user != null &&
                  <Nav.Link href="/">Главная</Nav.Link>
                }
                <Nav.Link href="/products">Каталог</Nav.Link>
                <Nav.Link href="/news">Новости</Nav.Link>
                {
                  auth.role == "Admin" &&
                  props.auth.user != null &&
                  <Nav.Link href="/allOrders">Заказы</Nav.Link>
                }
                {
                  auth.role != "Admin" &&
                  <Nav.Link href="/aboutUS">О нас</Nav.Link>
                }
                {
                  auth.role != "Admin" &&
                  <Nav.Link href="/contacts">Контакты</Nav.Link>
                }
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {
                  auth.role != "Admin" &&
                  props.auth.user != null &&
                  <Nav.Link href="/cart"><img class="rounded-circle" style={{ height: '25px' }} src={cartImage} /></Nav.Link>

                }

                {props.auth.user == null &&
                  <Nav.Link onClick={signIn}>Войти</Nav.Link>
                }

                {props.auth.user == null &&
                  <Nav.Link href="https://localhost:44386/Auth/Register">Регистрация</Nav.Link>
                }
                {
                  auth.role != "Admin" &&
                  props.auth.user != null &&
                  <Nav.Link href="/orders">Мои заказы</Nav.Link>
                }
                {props.auth.user != null &&
                  <Nav.Link onClick={signOut}>Выйти</Nav.Link>
                }

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
export default CustomNavbar;