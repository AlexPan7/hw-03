import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { PostDetail } from '../components/Post';

import axios from 'axios';

export const Post = () => {
  const params = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products')
        setPosts(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts();
  }, []);

  const post = posts.products && posts.products.filter(({id}) => id == params.id);

  return (
    <>
      <Link to="/">Go back</Link>
      {post && <PostDetail post={post[0]}/>}
    </>
  )
}
