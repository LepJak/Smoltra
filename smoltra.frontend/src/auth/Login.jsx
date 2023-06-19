import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signinRedirect } from '../services/userService';

const Login = () => {
    function login() {
        signinRedirect()
      }
    const user = useSelector(state => state?.auth?.user)
    return (
        (user) ?
          (<Navigate  to={'/'} />)
          :
          (
            <div>
              <h1>Hello!</h1>
              <p>Welcome to We Want Doughnuts.</p>
              <p>A demo of using React and Identity Server 4 to authenticate a user via OpenID Connect to gain access to a web API (and some lovely doughnuts).</p>
              <p>Start by signing in.</p>
              <p>💡 <strong>Tip: </strong><em>User: 'alice', Pass: 'alice'</em></p>
    
              <button onClick={() => login()}>Login</button>
              <p><a target='_blank' rel='noopener noreferrer' href='https://github.com/tappyy/react-IS4-auth-demo'>Github Repo</a></p>
            </div>
          ))
    // return (<div style={{display: 'flex', marginTop:'auto', marginBottom:'auto' ,height:'auto',alignItems: 'center', justifyContent: 'center'}}>
    //     <Form>
    //         <h2 style={{textAlign:"center"}}>Вход</h2>
    //         <FloatingLabel
    //             controlId="floatingInput"
    //             label="Email address"
    //             className="mb-3"
    //             style={{width:'22rem'}}
    //         >
    //             <Form.Control type="email" placeholder="name@example.com" />
    //         </FloatingLabel>
    //         <FloatingLabel controlId="floatingPassword" label="Password">
    //             <Form.Control type="password" placeholder="Password" />
    //         </FloatingLabel>
    //         <Button style={{width:'100%', height:'50px', margin:'20px 0'}}>Войти</Button>
    //         <div  style={{textAlign:'center'}}><a href="../registration">Регистрация</a></div>
    //     </Form>

    // </div>)
}
export default Login;