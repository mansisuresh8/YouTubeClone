import "./App.css";

import Nav from "./components/nav";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";


function App() {
  return (
    <div className="bg-gray-950 text-white relative">
      <div className="flex justify-start items-start w-full ">
        <section className="w-[20%] fixed">
          <div className="w-full"><Sidebar /></div>
        </section>
        <section className="w-[80%] ms-[20%]">
          <div className="w-full fixed"><Nav /></div>
          <div className="w-full mt-32"><Home /></div>
        </section>
      </div>


    </div>
  );
}

export default App;
