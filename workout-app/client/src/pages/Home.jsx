import { useState, useEffect } from "react";

import axios from 'axios';

import Hero from "../components/Hero"
import {PostList, PostItem} from "../components/Post"
import {SectionItem, SectionHeading, SectionTitle, SectionMoreLink} from "../components/Section"
import CTA from "../components/CTA";
import CallButton from "../components/CallButton/CallButton";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products?limit=6')
        setPosts(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Hero />
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Popular Exercises</SectionTitle>
          <SectionMoreLink>SEE MORE EXERCISES</SectionMoreLink>
        </SectionHeading>
        <PostList>
          {posts.products && posts.products.map((post, id) => 
            <PostItem key={id} post={post} />
          )}
        </PostList>
      </SectionItem>
      <CTA />
      <CallButton />
    </>
  )
}
