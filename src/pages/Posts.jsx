import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://codebuddy.review/posts");
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post, index) => (
          <PostCard
            key={index}
            image={post.image}
            avatar={post.avatar}
            firstName={post.firstName}
            lastName={post.lastName}
            id={post.id}
            writeup={post.writeup}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
