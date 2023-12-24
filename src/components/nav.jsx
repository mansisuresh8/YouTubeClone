import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function nav() {
  return (
    <div className="bg-black z-20 py-4  w-full md:w-[80%]">
      <section className="flex justify-center items-center w-full py-4 text-white text-2xl md:px-4 px-2">
        <section className="flex justify-between items-center w-full ">
          <div className="flex justify-start md:justify-center items-center w-full">
            <div className="flex justify-center items-center w-1/2">
              <div className="flex justify-start items-start gap-2 md:hidden">
                <div className="text-red-600">
                  <FaYoutube />
                </div>
                <div className="relative ">
                  <p className="text-sm font-bold">YouTube</p>
                  <span className="absolute text-xs top-0 -end-4 font-bold ">
                    IN
                  </span>
                </div>
              </div>
              <div className="border rounded-full md:flex justify-between items-center px-2 md:w-full w-52 hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none bg-transparent px-4 py-2 md:w-full w-96"
                />
                <div className="me-2">
                  <IoIosSearch />
                </div>
              </div>
              <div className="border rounded-full px-2 py-2 ms-4 md:flex justify-normal items-center hidden">
                <FaMicrophone />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 ">
            <div>
              <FaVideo />
            </div>
            <div>
              <IoIosNotificationsOutline />
            </div>
            <div>
              <MdAccountBox />
            </div>
          </div>
        </section>
      </section>

      {/* scrollbar */}
      <section className="px-4">
        <div className="overflow-x-auto hidden-scrollbar whitespace-nowrap">
          <div className="flex md:justify-center md:items-center justify-start items-start my-4 md:gap-4 gap-2 md:ps-[60%]">
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
