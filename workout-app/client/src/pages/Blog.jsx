import { useState, useEffect } from "react";

import axios from 'axios';

import {PostList, PostItem} from "../components/Post"
import {SectionItem, SectionHeading, SectionTitle, SectionMoreLink} from "../components/Section"

export const Blog = () => {
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

  return (
    <>
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Our Blog</SectionTitle>
        </SectionHeading>
        <PostList>
          {posts.products && posts.products.map((post, id) => (
            <PostItem key={id} post={post}/>
          ))}
        </PostList>
      </SectionItem>
    </>
  )
}
