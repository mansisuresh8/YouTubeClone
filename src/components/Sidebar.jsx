import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineAccountBox } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoMdMusicalNote } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { IoGameController } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { IoMdBulb } from "react-icons/io";
import { PiCoatHangerFill } from "react-icons/pi";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="border-e overflow-auto h-screen pt-4 ">
      <section className="flex justify-start items-center flex-row gap-8 text-2xl px-16">
        <div>
          <RxHamburgerMenu />
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="text-red-600">
            <FaYoutube />
          </div>
          <div className="relative ">
            <p className="text-xl font-bold">YouTube</p>
            <span className="absolute text-xs top-0 -end-4 font-bold ">IN</span>
          </div>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2  gap-8 ">
          <div>
            <FaHome />
          </div>
          <p>Home</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8">
          <div>
            <SiYoutubeshorts />
          </div>
          <p>Shorts</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <MdSubscriptions />
          </div>
          <p>Subscription</p>
        </div>
      </section>
      <div className="w-full h-px bg-white my-4"></div>
      <section className="hover:bg-gray-800 cursor-pointer ">
        <div className="flex justify-start items-center px-4 py-4 text-lg gap-2 w-full">
          <p>You</p>
          <div className="w-40">
            <MdKeyboardArrowRight />
          </div>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <MdOutlineAccountBox />
          </div>
          <p>Your channel</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div className="">
            <MdHistory />
          </div>
          <p>History</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <BiSolidVideos />
          </div>
          <p>Your videos</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <MdOutlineWatchLater />
          </div>
          <p>Watch later</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <BiSolidLike />
          </div>
          <p>Liked watch</p>
        </div>
      </section>
      <div className="w-full h-px bg-white my-4"></div>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-between items-center px-4 py-4 text-lg gap-2 w-full">
          <p>Subscription</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <FaPlusCircle />
          </div>
          <p>Browse channel</p>
        </div>
      </section>
      <div className="w-full h-px bg-white my-4"></div>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-between items-center px-4 py-4 text-lg gap-2 w-full">
          <p>Explore</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <FaFireAlt />
          </div>
          <p>Trending</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <HiShoppingBag />
          </div>
          <p>Shopping</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <IoMdMusicalNote />
          </div>
          <p>Music</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <BiMoviePlay />
          </div>
          <p>Movies</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <CiStreamOn />
          </div>
          <p>Live</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <IoGameController />
          </div>
          <p>Gaming</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <FaRegNewspaper />
          </div>
          <p>News</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <FaTrophy />
          </div>
          <p>Sport</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <IoMdBulb />
          </div>
          <p>Learning</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <PiCoatHangerFill />
          </div>
          <p>Fashion & Beauty</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <MdOutlinePodcasts />
          </div>
          <p>Podcast</p>
        </div>
      </section>
      <div className="w-full h-px bg-white my-4"></div>
      <section className="hover:bg-gray-800 cursor-pointer">
        <div className="flex justify-between items-center px-4 py-4 text-lg gap-2 w-full">
          <p>More Frome YouTube</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div className="text-red-700">
            <FaYoutube />
          </div>
          <p>YouTube Premium</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div className="text-red-700">
            <SiYoutubestudio />
          </div>
          <p>YouTube Studio</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div className="text-red-700">
            <SiYoutubemusic />
          </div>
          <p>YouTube Music</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div className="text-red-700">
            <TbBrandYoutubeKids />
          </div>
          <p>YouTube Kids</p>
        </div>
      </section>
      <div className="w-full h-px bg-white my-4"></div>
      <section className="hover:bg-gray-800 cursor-pointer  px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <CiSettings />
          </div>
          <p>Setting</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <CiFlag1 />
          </div>
          <p>Report History</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <IoIosHelpCircleOutline />
          </div>
          <p>Help</p>
        </div>
      </section>
      <section className="hover:bg-gray-800 cursor-pointer px-16">
        <div className="flex justify-start items-center py-2 gap-8 ">
          <div>
            <MdOutlineFeedback />
          </div>
          <p>Send feedback</p>
        </div>
      </section>
      <div className="w-full h-px bg-white my-4"></div>
      <section className="hover:bg-gray-800 py-8 ps-4">
        <div className="py-2 text-sm px-4">
          <p>AboutPress Copyright Contact us Creators Advertise Developers</p>
          <p className="py-4">
            Terms Privacy Policy & Safety How YouTube works Test new features
          </p>
          <p>© 2023 Google LLC</p>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
