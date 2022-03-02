import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import posts from '../posts.json';

function FullArticle() {
  let {id} = useParams()
  
  const post = posts.find(obj => obj.id === Number(id))
  console.log(post)

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