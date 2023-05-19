import { useState } from "react";
import axios from "axios";

export const DashboardPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    tag: "",
    categories: [],
    slug: "",
    thumbnail: null,
  })

  return <div>Post</div>
}