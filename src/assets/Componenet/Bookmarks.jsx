import React from "react";
import Bookmark from "./Bookmark";

export default function Bookmarks({ bookMarks, time }) {
  return (
    <div className="flex flex-col md:w-1/3  m-10">
      <div className="flex justify-center p-5 border-2 border-black my-5">
        <h1 className="text-4xl font-bold">Time spent on read : {time}</h1>
      </div>
      <div className="bg-gray-200">
        <div className="flex mt-5 ml-5">
          <h1 className="text-4xl font-bold ">
            Bookmarked Blogs : {bookMarks.length}
          </h1>
        </div>
        <div>
          {bookMarks.map((bkmrk, index) => (
            <div>
              <Bookmark bkmrk={bkmrk} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
