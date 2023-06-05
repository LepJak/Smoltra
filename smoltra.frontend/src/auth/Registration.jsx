import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Registration = () => {
    return (<div style={{display: 'flex', marginTop:'auto', marginBottom:'auto' ,height:'auto',alignItems: 'center', justifyContent: 'center'}}>
        <Form>
            <h2 style={{textAlign:"center"}}>Регистрация</h2>
            <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
                style={{width:'22rem'}}
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" className="mb-3" label="Пароль">
                <Form.Control type="password" placeholder="Пароль" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Потдтвердите пароль">
                <Form.Control type="password" placeholder="Регистрация" />
            </FloatingLabel>
            <Button style={{width:'100%', height:'50px', margin:'20px 0'}}>Войти</Button>
            <div  style={{textAlign:'center'}}><a href="../login">Войти</a></div>
            
        </Form>

    </div>)
}
export default Registration;