import React from "react";
import { CiBookmark } from "react-icons/ci";

export default function Blog({
  blog,
  index,
  handleBookmarks,
  handleMarkasread,
}) {
  return (
    <div className="border-2 border-sky-700 border-dotted mt-5">
      <div>
        <img src={blog.cover_img} className="w-[850px] h-[400px]" />
      </div>

      <div className="flex justify-between items-center  ">
        <div className="flex items-center gap-3 ">
          <div>
            <img
              src={blog.author_image}
              className="w-[70px] h-[70px] rounded-full"
            />
          </div>
          <div>
            <h1>{blog.author_name}</h1>
            <p>{blog.posted_date}</p>
          </div>
        </div>
        <div className="mr-10 flex items-center gap-2">
          <span>0{blog.reading_time} min read </span>
          <button onClick={() => handleBookmarks(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-2xl">{blog.title}</h1>
      </div>
      <div>
        {blog.hashtags.map((has, index) => (
          <span className="text-sm" key={index}>
            {" "}
            <a href="#">{has}</a> &nbsp;
          </span>
        ))}
      </div>
      <div>
        <button onClick={() => handleMarkasread(blog.reading_time, blog.id)}>
          Mark as read
        </button>
      </div>
    </div>
  );
}
