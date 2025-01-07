import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-96 px-28 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className=" text-6xl font-bold"> {title}</h1>
      <p className="py-6 mt-3 text-lg w-1/4 h-32 overflow-y-scroll scrollbar-hide">
        {overview}
      </p>
      <div className="">
        <button className="bg-white text-black px-8 py-3 text-lg rounded-md mr-4 my-5 hover:bg-opacity-80">
          ▶︎ Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-3 text-lg rounded-md bg-opacity-50 hover:bg-opacity-25">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
