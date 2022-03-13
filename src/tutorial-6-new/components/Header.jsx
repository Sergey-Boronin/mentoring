import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Header() {
  const [isAuth, setIsAuth] = React.useState(false)

const { pathname } = useLocation()
const navigate = useNavigate()

React.useEffect(() => {
  if(window.localStorage.getItem('token')) {
    setIsAuth(true)
  } else {
    setIsAuth(false)
  }
}, [pathname])

const handlerClickLogout = () => {
  if(isAuth && window.confirm("Вы действительно хотите выйти?")) {
    window.localStorage.removeItem('token')
    navigate('/')
    setIsAuth(false)
  } else {
    navigate('/login')
  }
}

  return (
    <header className="header">
        <Link to="/">
          <h2>Blog</h2>
        </Link>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link active={pathname === '/'} to="/" as={Link}>Главная</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={pathname === '/about'} to="/about" as={Link}>Обо мне</Nav.Link>
          </Nav.Item>
          <Button onClick={handlerClickLogout} variant={isAuth ? 'danger' : 'dark'}>
          {isAuth ? 'Выйти' : 'Войти'}
          </Button>
          {/* <Nav.Item>
          <Nav.Link variant='danger' active={pathname === '/login'} to="/login" as={Link}>
          {isAuth ? 'Выйти' : 'Войти'}
          </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </header>
  )
}

export default Header