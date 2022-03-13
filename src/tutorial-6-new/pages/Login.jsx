import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Login() {
const navigate = useNavigate()

const [fields, setFields] = React.useState({
  email: 'test@test.ru',
  password: '123456'
})

const handleChangeInput = (e) => {
  setFields({
    ...fields,
    [e.target.name]: e.target.value
  })
}

const onSubmit = async (e) => {
  e.preventDefault()
  const resp = await fetch(
    `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`
    );
 console.log(resp)
 
  if(resp.ok) {
    console.log('Авторизация ОК')
    const { token } = await resp.json()
    window.localStorage.setItem('token', token)

    navigate('/profile')
  } else {
    console.log('Авторизация не ОК')
  }
}

  return (
    <Form onSubmit={onSubmit} className="login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control name="email" onChange={handleChangeInput} type="email" value={fields.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control name="password" onChange={handleChangeInput} type="password" value={fields.password} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
}
