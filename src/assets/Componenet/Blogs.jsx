import React, { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs({ handleBookmarks, handleMarkasread }) {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3  flex flex-col justify-center items-center ">
      {Blogs.map((blog, index) => (
        <Blog
          blog={blog}
          key={index}
          handleBookmarks={handleBookmarks}
          handleMarkasread={handleMarkasread}
        />
      ))}
    </div>
  );
}
