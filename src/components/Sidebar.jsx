import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { MdOutlineAccountBox } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

import { FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="border-e">
      <section className="flex justify-center items-center flex-row gap-8">
        <div>
          <RxHamburgerMenu />
        </div>
        <div className="text-5xl">
          <ImYoutube2 />
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8">
          <div>
            <FaHome />
          </div>
          <p>Home</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8">
          <div>
            <SiYoutubeshorts />
          </div>
          <p>Shorts</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8 ">
          <div>
            <MdSubscriptions />
          </div>
          <p>Subscription</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer border-t-2">
        <div className="flex justify-between items-center px-4 py-4 text-lg gap-2 w-full">
          <p>You</p>
          <div className="w-40">
            <FaGreaterThan />
          </div>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8 ">
          <div>
            <MdOutlineAccountBox />
          </div>
          <p>Your channel</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8 ">
          <div className="">
            <MdHistory />
          </div>
          <p>History</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8 ">
          <div>
            <BiSolidVideos />
          </div>
          <p>Your videos</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8 ">
          <div>
            <MdOutlineWatchLater />
          </div>
          <p>Watch later</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-center items-center py-2 text-2xl gap-8 ">
          <div>
            <BiSolidLike />
          </div>
          <p>Liked watch</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer border-t-2">
        <div className="flex justify-between items-center px-4 py-4 text-lg gap-2 w-full">
          <p>Subscription</p>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
