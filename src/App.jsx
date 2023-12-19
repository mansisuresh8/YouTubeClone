import "./App.css";

import Nav from "./components/nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-950 h-screen text-white">
      <div className="flex justify-start items-start w-full">
        <section className="w-72 h-screen">
          <div className="w-full"><Sidebar /></div>
        </section>
        <section className="w-full h-10">
          <div className="w-full"><Nav /></div>
          {/* <div className="bg-yellow-400 h-10 w-full"></div> */}
        </section>
      </div>


    </div>
  );
}

export default App;
