import { useEffect, useState } from "react";
import Right from "./icons/Right-Pine-Cone-Logo";
import Left from "./icons/Left-Pine-Cone-Logo";
import Ball from "./icons/Ball";
import Ball2 from "./icons/Ball2";
import moment from "moment";
import Location from "./icons/location";
import Search from "./icons/Search";
import Emoji from "./Emoji";
import Loader from "./Skelton-Loader";
import EmojiNight from "./EmojiNight";
import Skeleton from "react-loading-skeleton";
import Footer from "./Footer";
//import countriesData from "./data";
//import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [weather, setWeather] = useState("Ulan Bator");
  const [typeOfWeatherDay, setTypeOfWeatherDay] = useState("Sunny");
  const [typeOfWeatherNight, setTypeOfWeatherNight] = useState("Clear");
  const [celciusDay, setCelcuisDay] = useState("0");
  const [celciusNight, setCelcuisNight] = useState("0");
  const [loading, setLoading] = useState(false);
  const [air, setAir] = useState("0");
  const [blocks, setBlocks] = useState(false);

  const getCountries = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
      setSearchValue("");
    }
    skeleton();
  };
  const skeleton = (loading) => {
    if (loading === true) {
      console.log("It's working");
    } else {
      console.log("It's not working");
    }
  };
  console.log("loading:", loading);
  const weatherApiKey = "341c21a1a1764abcaab90621251501";
  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${weather}&aqi=yes&alerts=yes`
      );
      const result = await response.json();
      const gradusDay = result.forecast.forecastday[0].hour[10].temp_c;
      const gradusNight = result.forecast.forecastday[0].hour[22].temp_c;
      const WeatherDay = result.forecast.forecastday[0].hour[10].condition.text;
      const WeatherNight =
        result.forecast.forecastday[0].hour[22].condition.text;
      const airQuality = result.forecast.forecastday[0].day.air_quality.pm2_5;
      console.log("hoho", result);
      console.log("pm2.5", airQuality);
      setAir(airQuality);
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
    skeleton();
  }, [weather]);

  const handlaChangeCountry = (event) => {
    let citiesName = event;
    setWeather(citiesName);
  };
  const setBlock = () => {
    console.log("hello");
    let block = true;
    console.log(block);
    setBlocks(block);
  };
  const setBloc = () => {
    let block = false;
    setBlocks(block);
  };
  console.log("block", blocks);
  return (
    <>
      <div className="flex justify-center items-start w-full h-screen bg-gray-900 relative">
        <div className="flex justify-center border-black absolute z-10 flex-col top-10">
          <div className="relative flex justify-center">
            <div className="absolute left-[-160px] z-10 top-4">
              <Search />
            </div>
            <div className="absolute ">
              <input
                placeholder="Search"
                value={searchValue}
                onChange={onChange}
                className="h-20 w-[350px] rounded-[45px] py-[10px] px-[70px] text-3xl mb-[20px]"
              />
              <div className="bg-white rounded-2xl">
                {filteredData
                  .map((el) => (
                    <p
                      onClick={() => handlaChangeCountry(el)}
                      key={el}
                      className="cursor-pointer flex items-center"
                    >
                      <Location />
                      {el}
                    </p>
                  ))
                  .slice(0, 4)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute left-0 w-1/2 h-screen bg-gray-100 relative ">
          <div className="absolute top-[150px] left-[150px]">
            <Ball2 />
          </div>
          <div className="absolute z-20">{/* <Loader/> */}</div>
          <div className="w-1/2 h-5/6 bg-opacity-50 shadow-md rounded-2xl absolute z-10 backdrop-blur-sm p-10">
            <div>{moment().format("LL")}</div>
            <div className="flex mb-12">
              <h1 className="text-5xl h-2 font-extrabold text-grey-900 mb-12">
                {weather}
              </h1>
              <div className="w-10 h-10">
                <Location />
              </div>
            </div>
            <div className="flex justify-center">
              <Emoji typeOfWeatherDay={typeOfWeatherDay} />
            </div>
            <div className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">
              {celciusDay}
              <sup className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">
                o
              </sup>
            </div>
            <div className="font-extrabold mb-12 h-6 text-indigo-400">
              {typeOfWeatherDay}
            </div>
            <div className="mt-20">
              <Footer />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute right-0 w-1/2 h-screen bg-gray-900 relative ">
          <div className="w-1/2 h-5/6 bg-opacity-50 shadow-md rounded-2xl absolute z-10 backdrop-blur-sm p-10">
            <div className="text-white">{moment().format("LL")}</div>
            <div className="flex mb-12">
              <h1 className="text-5xl h-2 font-extrabold text-gray-100 mb-12">
                {weather}
              </h1>
              <div className="w-10 h-10">
                <Location />
              </div>
            </div>
            <div className="flex justify-center">
              <EmojiNight typeOfWeatherNight={typeOfWeatherNight} />
            </div>
            <div
              onMouseEnter={setBlock}
              onMouseOut={setBloc}
              
             >
              {
                blocks?(<div>
                  <div className="text-[110px]  bg-gradient-to-b from-white to-black bg-clip-text font-extrabold text-transparent">
                    {parseInt(air)}
                  </div>
                  <div className="font-extrabold mb-12 h-6 text-orange-500">
                    {typeOfWeatherNight}
                  </div>
                </div>):(<div>
                <div className="text-[110px]  bg-gradient-to-b from-white to-black bg-clip-text font-extrabold text-transparent">
                  {celciusNight}
                  <sup className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">
                    o
                  </sup>
                </div>
                <div className="font-extrabold mb-12 h-6 text-orange-500">
                  {typeOfWeatherNight}
                </div>
              </div>)
              }
              
              
            </div>
            <div className="mt-20">
              <Footer />
            </div>
          </div>
          <div className="absolute bottom-[70px] right-[230px]">
            <Ball />
          </div>
        </div>
        <div className="rounded-full w-[1200px] h-[1200px] border border-grey-300 absolute z-1 flex justify-center items-center">
          <div className="rounded-full w-[900px] h-[900px] border border-grey-300 absolute z-1 flex justify-center items-center">
            <div className="rounded-full w-[600px] h-[600px] border border-grey-300 absolute z-1 flex justify-center items-center ">
              <div className="rounded-full w-[300px] h-[300px] border border-grey-300 absolute z-2 flex justify-center items-center">
                <div className="w-[190px] h-[190px] flex justify-center items-center absolute right0 bg-gray-100 overflow-hidden">
                  <div className="w-[150px] h-[135px] absolute bg-gray-900 rounded-full top-0 right-0 mt-[-88px] mr-[-52px]"></div>
                  <div className="w-[150px] h-[135px] absolute bg-gray-900  rounded-full bottom-0 right-0 mb-[-88px] mr-[-52px]"></div>
                  <div className="w-[70px] h-[135px] flex justify-end items-end bg-gray-900 absolute right-0"></div>
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
