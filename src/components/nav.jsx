import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import { FaVideo } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

function nav() {
  return (
    <div className="flex justify-between item-center py-4 bg-black text-white text-2xl px-4 cursor-pointer">
      <section className="flex justify-between items-center flex-row gap-5">
        <div>
          <RxHamburgerMenu />
        </div>
        <div className="text-5xl">
          <ImYoutube2 />
        </div>
      </section>

      <section className="border border-slate-800 rounded-full w-96 flex justify-between items-center px-2 ">
        <div className="text-lg">
          <p>Search</p>
        </div>
        <div>
          <IoIosSearch />
        </div>
      </section>
      <section className="flex justify-between items-start">
        <div className="border rounded-full px-2 py-2">
          <FaMicrophone />
        </div>
      </section>

      <section className="flex justify-between items-center flex-row gap-5">
        <div className="flex ">
          <FaVideo />
        </div>
        <div className="flex ">
          <IoIosNotificationsOutline />
        </div>
        <div className="flex ">
          <MdAccountBox />
        </div>
      </section>
    </div>
  );
}

export default nav;
