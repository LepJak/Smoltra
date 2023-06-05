import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (<div style={{display: 'flex', marginTop:'auto', marginBottom:'auto' ,height:'auto',alignItems: 'center', justifyContent: 'center'}}>
        <Form>
            <h2 style={{textAlign:"center"}}>Вход</h2>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                style={{width:'22rem'}}
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button style={{width:'100%', height:'50px', margin:'20px 0'}}>Войти</Button>
            <div  style={{textAlign:'center'}}><a href="../registration">Регистрация</a></div>
        </Form>

    </div>)
}
export default Login;