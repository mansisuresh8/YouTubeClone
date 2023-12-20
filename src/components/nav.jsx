import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

function nav() {
  return (
    <div className="bg-black z-10 py-4 w-[80%]">
      <section className=" flex justify-center items-center w-full py-4 text-white text-2xl px-4">
        <section className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-1/2">
              <div className="border rounded-full  flex justify-between items-center px-2 w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none bg-transparent px-4 py-2 w-full"
                />
                <div className="me-2">
                  <IoIosSearch />
                </div>
              </div>
              <div className="border rounded-full px-2 py-2 ms-4">
                <FaMicrophone />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex ">
              <FaVideo />
            </div>
            <div className="flex ">
              <IoIosNotificationsOutline />
            </div>
            <div className="flex ">
              <MdAccountBox />
            </div>
          </div>
        </section>
      </section>
      <section className="">
        <div className="overflow-x-auto hidden-scrollbar whitespace-nowrap">
          <div className="flex justify-center items-center my-4 gap-4 ps-[60%]">
            <button className="rounded-lg border border-white px-4 py-1 bg-white text-black">
              All
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Mixes
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Music
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Film Criticisms
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Live
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              T-series
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Bollywood Music
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Website
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              History
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Anime
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Pop Rock
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Java
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Python
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Courses
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Thoughts
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Lo-fi
            </button>
            <button className="rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black">
              Watched
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default nav;
