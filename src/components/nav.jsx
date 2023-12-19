import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

function nav() {
  return (
    <div className="flex justify-center item-center py-4 bg-black text-white text-2xl px-4 cursor-pointer">
      <section className="flex justify-center items-center w-full">
        <div className="border rounded-full  flex justify-between items-center px-2 w-1/2">
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
      </section>

      <section className="flex justify-center items-center gap-5">
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
