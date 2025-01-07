import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-16">
      <h1 className=" text-6xl font-bold"> {title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-black px-10 py-3 text-lg rounded-md mr-4 opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-black px-10 py-3 text-lg rounded-md opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
