import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Header() {

let { pathname } = useLocation()

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
          <Nav.Item>
            <Nav.Link active={pathname === '/login'} to="/login" as={Link}>Войти</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
  )
}

export default Header