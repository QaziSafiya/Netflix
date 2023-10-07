import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[200px] h-[120px] p-4 m-5  bg-slate-400 md:bg-red-500 lg:bg-green-200 sm:bg-orange-300 ">
        Box1
      </div>
      <div className="w-[200px] h-[120px] p-4 m-5  bg-green-400 md:bg-red-500 lg:bg-green-200 sm:bg-orange-300 ">
        box2
      </div>
      <div className="w-[200px] h-[120px] p-4 m-5  bg-red-400 md:bg-red-500  lg:bg-green-200 sm:bg-orange-300 ">
        box3
      </div>
      <div className="w-[200px] h-[120px] p-4 m-5  bg-blue-400 md:bg-red-500  lg:bg-green-200 sm:bg-orange-300 ">
        box4
      </div>
    </div>
  );
}

export default App;
