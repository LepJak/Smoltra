import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsContainer from './components/Products/ProductsContainer';
import ProductDetailsContainer from './components/ProductDetails/ProductDetailsContainer';
import { ProductListContainer } from './components/administration/Products/ProductList/ProductListContainer';
import CustomNavbar from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Products from './components/Products/Products';
import { CartContainer } from './components/Cart/CartContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  ProductDetailsContainerWithRoute  from './components/ProductDetails/ProductDetailsContainer';
function App() {
  return (

    <Container className="justify-content-center">
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<ProductListContainer />} />
        <Route path="cart" element={<CartContainer />} />
          <Route path="/products">
            <Route index element={<ProductsContainer />} />
            <Route path=":productId" element={<ProductDetailsContainerWithRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>

  );
}

export default App;
