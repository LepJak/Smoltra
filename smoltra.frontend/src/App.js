import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsContainer from './components/Products/ProductsContainer';
import ProductDetailsContainer from './components/ProductDetails/ProductDetailsContainer';
import { ProductListContainer } from './components/administration/Products/ProductList/ProductListContainer';
import CustomNavbar from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Products from './components/Products/Products';
import CartContainer  from './components/Cart/CartContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  ProductDetailsContainerWithRoute  from './components/ProductDetails/ProductDetailsContainer';
import Login from './auth/Login';
import CustomFooter from './components/Navbar/Footer';
import Registration from './auth/Registration';
import MainPage from './components/MainPage/MainPage';
import {CreateProductContainer} from './components/administration/Products/CreateProduct/CreateProductContainer';
import UpdateProductContainer from './components/administration/Products/UpdateProduct/UpdateProductContainer';

function App() {
  return (

    <Container className="justify-content-center;" style={{height:'100%', backgroundColor:'white', minHeight:"100vh", padding:"0", display: 'flex',flexDirection: 'column'}}>
      <CustomNavbar />
      <BrowserRouter className="justify-content-center;">
        <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration/>} />
        <Route path="*" element={<MainPage />} />
        <Route path="createProduct" element={<CreateProductContainer/>}/>
        <Route path="/updateProduct">
          <Route path=":productId" element={<UpdateProductContainer/>}/>
        </Route>       
        <Route path="cart" element={<CartContainer />} />
          <Route path="/products">
            <Route index element={<ProductsContainer />} />
            <Route path=":productId" element={<ProductDetailsContainerWithRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CustomFooter/>
    </Container>

  );
}

export default App;
