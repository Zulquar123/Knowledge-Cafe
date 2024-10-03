import React from "react";

export default function Bookmark({ bkmrk }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center text-bold text-2xl border-4 border-dotted border-sky-700 m-4 p-3 bg-white text-center">
        {bkmrk.title}
      </div>
    </div>
  );
}
