import React, { useState } from "react";
import Header from "./assets/Componenet/Header";
import Blogs from "./assets/Componenet/Blogs";
import Bookmarks from "./assets/Componenet/Bookmarks";

export default function App() {
  const [bookMarks, setbookMarks] = useState([]);
  const [time, setTime] = useState(0);
  const handleBookmarks = (blog) => {
    const newbookMarks = [...bookMarks, blog];
    setbookMarks(newbookMarks);
  };

  const handleMarkasread = (rTime, id) => {
    const totalTime = rTime + time;
    setTime(totalTime);

    // Removing Bookmark after Read

    const remainingbookMarks = bookMarks.filter((bkmr) => bkmr.id !== id);
    setbookMarks(remainingbookMarks);
  };

  return (
    <div>
      <Header />
      <div className="md:flex">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleMarkasread={handleMarkasread}
        />
        <Bookmarks bookMarks={bookMarks} time={time} />
      </div>
    </div>
  );
}
