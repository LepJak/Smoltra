import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { ProductsContainer } from './components/Products/ProductsContainer';
import { ProductDetailsContainer } from './components/ProductDetails/ProductDetailsContainer';
import { ProductListContainer } from './components/administration/Products/ProductList/ProductListContainer';
import CustomNavbar from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Products from './components/Products/Products';

function App() {
  return (
    <Container className="justify-content-center">
      <CustomNavbar />
      <ProductsContainer />
    </Container>

  );
}

export default App;
