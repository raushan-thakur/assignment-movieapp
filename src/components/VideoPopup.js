import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-all duration-300 ${
        show ? "opacity-100 visible z-50" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={hidePopup}
        aria-label="Close video popup"
      ></div>

      <div
        className={`relative bg-black w-[90%] md:w-[800px] aspect-video transform transition-transform duration-300 ${
          show ? "scale-100" : "scale-75"
        }`}
      >
        <button
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-md focus:outline-none focus:ring focus:ring-red-300"
          onClick={hidePopup}
          aria-label="Close video"
        >
          ✕
        </button>

        {videoId ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white text-lg">
            No video available.
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPopup;
