import "./App.css";

import Nav from "./components/nav";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";


function App() {
  return (
    <div className="bg-gray-950 text-white relative">
      <div className="flex justify-start items-start w-full ">
        <section className="md:w-[20%] fixed hidden md:block ">
          <div className="w-full"><Sidebar /></div>
        </section>
        <section className="w-full md:w-[80%] md:ms-[20%]">
          <div className="w-full fixed z-20"><Nav /></div>
          <div className="w-full mt-32"><Home /></div>
        </section>
      </div>


    </div>
  );
}

export default App;
