import { useEffect, useState } from "react";
import Right from "./icons/Right-Pine-Cone-Logo";
import Left from "./icons/Left-Pine-Cone-Logo";
import Ball from "./icons/Ball";
import Ball2 from "./icons/Ball2";
import moment from "moment";
import Location from "./icons/location";
import Search from "./icons/Search";
//import countriesData from "./data";
//import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [weather, setWeather] = useState("Ulan Bator , Mongolia");
  const [typeOfWeatherDay,setTypeOfWeatherDay]=useState("Sunny");
  const [typeOfWeatherNight,setTypeOfWeatherNight]=useState("Clear")
  const [celciusDay,setCelcuisDay]=useState("0");
  const [celciusNight,setCelcuisNight]=useState("0")

  const getCountries = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      console.log("kk", result);
      const countries = result.data;

      const countriesData = countries.flatMap((c) =>
        c.cities.map((city) => `${city} , ${c.country}`)
      );
      setAllCities(countriesData);
    } catch (error) {
      console.log(error);
    }
  };

  
  const weatherApiKey = "341c21a1a1764abcaab90621251501";
  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${weather}`
      );
      const result = await response.json();
      const gradusDay=result.forecast.forecastday[0].hour[10].temp_c;
      const gradusNight=result.forecast.forecastday[0].hour[22].temp_c;
      const WeatherDay=result.forecast.forecastday[0].hour[10].condition.text;
      const WeatherNight=result.forecast.forecastday[0].hour[22].condition.text;
      console.log("hoho", result);
      setCelcuisDay(gradusDay);
      setCelcuisNight(gradusNight);
      setTypeOfWeatherDay(WeatherDay);
      setTypeOfWeatherNight(WeatherNight);

    } catch (error) {
      console.log(error);
    }
  };


  const onChange = (event) => {
    setSearchValue(event.target.value);
  };


  useEffect(() => {
    if (searchValue === "") {
      setFilteredData([]);
    } else {
      const filtered = allCities.filter((el) =>
        el.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchValue]);


  useEffect(() => {
    getCountries();
    getWeather();
  }, [weather]);


  const handlaChangeCountry = (event) => {
    console.log(event);
    let citiesName = event;
    setWeather(citiesName);
  };


  return (
    <>
      <div className="flex justify-center items-start w-full h-screen bg-gray-800 relative">
        <div className="flex justify-center border-black absolute z-10 flex-col top-10">
          <div className="relative flex justify-center">
          <div className="absolute left-[-160px] z-10 top-4">
          <Search/>
          </div>
          <div className="absolute ">
          <input
            value={searchValue}
            onChange={onChange}
            className="h-20 w-[350px] rounded-[45px] py-[10px] px-[70px] text-3xl mb-[20px]"
          />
          {filteredData
            .map((el) => (
              <p
                onClick={() => handlaChangeCountry(el)}
                key={el}
                className="bg-white cursor-pointer flex items-center"
              >
                <Location/>
                {el}
              </p>
            ))
            .slice(0, 5)}
          </div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute left-0 w-1/2 h-screen bg-gray-100 relative ">
          <div className="absolute top-[150px] left-[150px]">
            <Ball2 />
          </div>
          <div className="w-1/2 h-3/5 bg-opacity-50 shadow-md rounded-md absolute z-10 backdrop-blur-sm p-10">
            <div>{moment().format("LL")}</div>
            <h1 className="text-4xl">{weather}</h1>
            <div className="flex justify-center">
              <img src="./public/icon.png" />
            </div>
            <div className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">
              {celciusDay}
              <sup className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">o</sup>
            </div>
            <div>{typeOfWeatherDay}</div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute right-0 w-1/2 h-screen bg-gray-800 relative ">
          <div className="w-1/2 h-3/5 bg-opacity-50 shadow-md rounded-md absolute z-10 backdrop-blur-sm p-10">
            <div>{moment().format("LL")}</div>
            <h1 className="text-4xl">{weather}</h1>
            <div className="flex justify-center">
              <img src="./public/moon.png" />
            </div>
            <div className="text-[110px]  bg-gradient-to-b from-white to-black bg-clip-text font-extrabold text-transparent">
              {celciusNight}
              <sup className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">o</sup>
            </div>
            <div>{typeOfWeatherNight}</div>
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
