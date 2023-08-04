import React, { useEffect, useState } from "react";
import {
  LIGHT_GREY,
  PRUSSIAN_BLUE,
  RED,
} from "../../resources/constants/Theme";
import Footer from "../footer/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      setPosts(jsonData);
      console.log("hello1", jsonData);
    } catch (error) {
      console.log("something went wrong,", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome home, Stuart Olivera</h1>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ margin: "40px", backgroundColor: LIGHT_GREY }}
          >
            <h3 style={{ color: PRUSSIAN_BLUE }}>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <Footer yearProp="2023" />
    </div>
  );
}
