import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import posts from '../posts.json';

function FullArticle() {
  const { id } = useParams()
  
  const post = posts.find(obj => obj.id === Number(id));
  const navigate = useNavigate();

  React.useEffect(() => {
  setTimeout(() => {
    navigate("/", {replace: true})
  }, 3000)
 }, [])

  if(!post) {
    return (
    <>
      <h1>Статья не найдена</h1>
      <p>Сейчас вернемся на главную</p>
    </>
    )
  }
  
  return (
    <div className='full-article'>
      <h2>{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>
      <Link to='/'><Button>Назад</Button></Link>
    </div>
  );
}

export default FullArticle;