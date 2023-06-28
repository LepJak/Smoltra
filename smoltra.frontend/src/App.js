import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateNewsContainer from './components/administration/Products/News/UpdateNews/UpdateNewsContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import ProductDetailsContainer from './components/ProductDetails/ProductDetailsContainer';
import { ProductListContainer } from './components/administration/Products/ProductList/ProductListContainer';
import CustomNavbar from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Products from './components/Products/Products';
import CartContainer from './components/Cart/CartContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetailsContainerWithRoute from './components/ProductDetails/ProductDetailsContainer';
import Login from './auth/Login';
import CustomFooter from './components/Navbar/Footer';
import Registration from './auth/Registration';
import MainPage from './components/MainPage/MainPage';
import { CreateProductContainer } from './components/administration/Products/CreateProduct/CreateProductContainer';
import UpdateProductContainer from './components/administration/Products/UpdateProduct/UpdateProductContainer';
import CreateNewsContainer from './components/administration/Products/News/CreateNews/CreateNewsContainer';
import NewsListContainer from './components/NewsList/NewsListContainer';
import NewsDetailsContainer from './components/NewsDetail/NewsDetailsContainer';
import MyOrderListContainer from './components/Orders/MyOrderList/MyOrderListContainer';
import OrderDetailsContainer from './components/Orders/OrderDetails/OrderDetailsContainer';
import UpdateOrderContainer from './components/administration/Products/UpdateOrder/UpdateOrderContainer';
import Protected from './utils/protectedRoute'
import store from './redux/redux-store';
import { useEffect } from 'react';
import { loadUser, loadUserFromStorage } from './services/userService';
import AuthProvider from './utils/authProvider';
import { Provider } from 'react-redux';
import userManager from './services/userService';
import AboutUs from './components/AboutUs/AboutUs';
import NavbarContainer from './components/Navbar/NavbarContainer';
import SigninOidc from './auth/SigninOidc';
import SignoutOidc from './auth/SignoutOidc';
import MainPageContainer from './components/MainPage/MainPageContainer';
import AllOrderListContainer from './components/Orders/AllOrderList/AllOrderListContainer';
import Contacts from './components/Contacts/Contacts';

function App() {
  //loadUser();
  useEffect(() => {
    // fetch current user from cookies
    //loadUser()
    loadUserFromStorage(store)
  }, [])
  return (

    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
        <Container className="justify-content-center;" style={{ height: '100%', opacity:"0.97", backgroundColor: 'white', minHeight: "100vh", padding: "0", display: 'flex', flexDirection: 'column' }}>
          <NavbarContainer />
          <BrowserRouter className="justify-content-center;">
            <Routes>      
              <Route path="allOrders" element={<AllOrderListContainer/>}/>
              <Route path="login" element={<Login />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="registration" element={<Registration />} />
              <Route path="*" element={<MainPageContainer />} />
              <Route path="createProduct" element={<CreateProductContainer />} />
              <Route path="createNews" element={<CreateNewsContainer />} />
              <Route path="/news"  >
                <Route index element={<NewsListContainer />} />
                <Route path=":productId" element={<NewsDetailsContainer />} />
              </Route>
              <Route path="/orders">
                <Route index element={<MyOrderListContainer />} />
                <Route path=":productId" element={<OrderDetailsContainer />} />
              </Route>
              <Route path="/updateOrder/:productId" element={<UpdateOrderContainer />} />
              <Route path="/updateNews/:productId" element={<UpdateNewsContainer />} />
              <Route path="/updateProduct">
                <Route path=":productId" element={<UpdateProductContainer />} />
              </Route>
              <Route path="cart" element={<CartContainer />} />
              <Route path="/products">
                <Route index element={<ProductsContainer />} />
                <Route path=":productId" element={<ProductDetailsContainerWithRoute />} />
              </Route>
              <Route
                path="/signin-oidc"
                element={<SigninOidc/>}
              />
              <Route path="/signout-oidc" element={<SignoutOidc/>} />
            </Routes>
          </BrowserRouter>
          <CustomFooter />
        </Container>
      </AuthProvider>
    </Provider>

  );
}

export default App;
