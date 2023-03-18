import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Posts";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const getApiData = async () => {
    let res = await axios.get("https://dummyjson.com/posts");
    setPosts(res.data.posts);
    console.log(res.data.posts);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Box className="container">
      {posts.map((post, index) => {
        return <Post key={index} data={post} />;
      })}
    </Box>
  );
};

export default PostsList;
