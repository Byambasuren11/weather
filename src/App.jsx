import { useState } from "react";
//import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <div className="flex justify-center items-start w-full h-screen bg-gray-800 relative">
          <div className="flex justify-start items-start w-1/2 h-screen bg-gray-100 ">

          </div>
          <div className="flex justify-end items-end w-1/2 h-screen bg-black ">

          </div>
          <div className="rounded-full w-96 h-96 border border-white absolute z-1">
            <div>
              <div>

              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
