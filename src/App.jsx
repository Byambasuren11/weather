import { useEffect, useState } from "react";
import Right from "./icons/Right-Pine-Cone-Logo";
import Left from "./icons/Left-Pine-Cone-Logo";
import Ball from "./icons/Ball";
import Ball2 from "./icons/Ball2";
import countriesData from "./data";
//import './App.css'

function App() {
  const data = [countriesData];
  console.log(data);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const onChange = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    if (searchValue === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter((el) => el.includes(searchValue));
      setFilteredData(filtered);
    }
  }, [searchValue]);

  return (
    <>
      <div className="flex justify-center items-start w-full h-screen bg-gray-800 relative">
        <div className="flex justify-center border-black absolute w-24 h-10 z-10 flex-col top-20">
          <input value={searchValue} onChange={onChange} />
          {filteredData.map((el) => (
            <p key={el}>{el}</p>
          ))}
        </div>
        <div className="flex justify-center items-center absolute left-0 w-1/2 h-screen bg-gray-100 relative ">
          <div className="absolute top-[150px] left-[150px]">
            <Ball2 />
          </div>
          <div className="w-1/2 h-3/5 bg-opacity-50 shadow-md rounded-md absolute z-10 backdrop-blur-sm p-10">
            <div>city name</div>
            <div>
              <img src="./public/icon.png" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute right-0 w-1/2 h-screen bg-gray-800 relative ">
          <div className="w-1/2 h-3/5 bg-opacity-50 shadow-md rounded-md absolute z-10 backdrop-blur-sm p-10">
            <div>city name</div>
            <div>
              <img src="./public/moon.png" />
            </div>
          </div>
          <div className="absolute bottom-[150px] right-[150px]">
            <Ball />
          </div>
        </div>
        <div className="rounded-full w-[1200px] h-[1200px] border border-grey-300 absolute z-1 flex justify-center items-center">
          <div className="rounded-full w-[900px] h-[900px] border border-grey-300 absolute z-1 flex justify-center items-center">
            <div className="rounded-full w-[600px] h-[600px] border border-grey-300 absolute z-1 flex justify-center items-center ">
              <div className="rounded-full w-[300px] h-[300px] border border-grey-300 absolute z-2 flex justify-center items-center">
                <div className="w-[190px] h-[190px] flex justify-center items-center absolute right0 bg-gray-100 overflow-hidden">
                  <div className="w-[150px] h-[135px] absolute bg-gray-800 rounded-full top-0 right-0 mt-[-88px] mr-[-52px]"></div>
                  <div className="w-[150px] h-[135px] absolute bg-gray-800  rounded-full bottom-0 right-0 mb-[-88px] mr-[-52px]"></div>
                  <div className="w-[70px] h-[135px] flex justify-end items-end bg-gray-800 absolute right-0"></div>
                  <div className="rounded-full w-[130px] h-[130px] border border-grey-300 absolute z-1 flex justify-center items-center bg-gray-100 gap-4">
                    <Left />
                    <Right />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
