import React from "react";
import profile from "../Images/profile.jpg";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center mx-10 px-4 py-1 border-b-2 border-black">
        <h1 className="text-6xl"> Knowledge Cafe</h1>
        <img src={profile} className="w-[70px] h-[70px] rounded-full" />
      </div>
    </>
  );
}
