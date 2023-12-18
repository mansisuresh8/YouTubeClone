import React from "react";
import { FaYoutube } from "react-icons/fa";

function nav() {
  return (
    <div className="flex justify-between item-center text-black">
      <section>
        <div className="flex ">
          <FaYoutube />
        </div>
        <div>
          <p>Create</p>
          <p>Notifictaion</p>
          <p>Acount</p>
        </div>
      </section>
    </div>
  );
}

export default nav;
