import React from "react";

const VideoSection = () => {
  return (
    <div className="flex justify-start items-start flex-col md:p-4 w-full">
      <video
        src="./assets/home/video-1.mp4"
        controls
        poster="./assets/home/image-2.jpg"
        className="z-10"
      ></video>
      {/* <img src="./assets/home/image-2.jpg" alt="" /> */}
      <div className="flex justify-between items-start flex-col px-4 md:px-0">
        <div className="flex justify-center items-center gap-2">
          <div>
            <img
              src="./assets/home/icon-1.jpg"
              alt=""
              className="rounded-full w-20"
            />
          </div>
          <div>
            <p className="py-2">
              Mannat Official Lyrical Video | Darshan Raval | Prakriti Kakar |
              Youngveer | Lijo George | Dard{" "}
            </p>
          </div>
        </div>
        <div className="font-thin text-sm">
          <p className="px-10">Indie Music Label</p>
          <p className="px-10">3.7M views . 4 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
