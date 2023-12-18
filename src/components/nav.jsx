import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";

function nav() {
  return (
    <div className="flex justify-between item-center py-4 bg-black text-white px-4 cursor-pointer">
      <section className="bg-red-400">
        <div className="flex ">
          <FaYoutube />
        </div>
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
