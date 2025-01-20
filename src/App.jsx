import { useEffect, useState } from "react";
import Ball from "./icons/Ball";
import Ball2 from "./icons/Ball2";
import moment from "moment";
import Location from "./icons/Location";
import Search from "./icons/Search";
import Emoji from "./Emoji";
import EmojiNight from "./EmojiNight";
import Footer from "./Footer";
import Background from "./Background";
import Air from "./Air-Quality";
import Loader from "./Skelton-Loader";

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
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const countries = result.data;
      const countriesData = countries.flatMap((c) =>
        c.cities.map((city) => `${city} , ${c.country}`)
      );
      setAllCities(countriesData);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchValue("");
    }
  };
  const weatherApiKey = "341c21a1a1764abcaab90621251501";
  const getWeather = async () => {
    try {
      setLoading(true);
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
      setAir(airQuality);
      setCelcuisDay(gradusDay);
      setCelcuisNight(gradusNight);
      setTypeOfWeatherDay(WeatherDay);
      setTypeOfWeatherNight(WeatherNight);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
    let citiesName = event;
    setWeather(citiesName);
  };
  const setBlock = () => {
    let block = true;
    setBlocks(block);
  };
  const setBloc = () => {
    let block = false;
    setBlocks(block);
  };
  return (
    <>
      {loading && (
        <div className="flex justify-center items-start w-full h-screen bg-gray-900 relative">
          <div className="flex justify-center items-center absolute left-0 w-1/2 h-screen bg-gray-100 relative ">
            <div className="w-1/2 h-5/6 bg-opacity-50 shadow-md rounded-2xl absolute z-10 backdrop-blur-sm p-10">
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center absolute right-0 w-1/2 h-screen bg-gray-900 relative ">
            <div className="w-1/2 h-5/6 bg-opacity-50 shadow-md rounded-2xl absolute z-10 backdrop-blur-sm p-10">
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            </div>
          </div>
          <Background />
        </div>
      )}

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
          <div className="absolute z-20"></div>
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
            <div onMouseEnter={setBlock} onMouseOut={setBloc}>
              {blocks ? (
                <div>
                  <div className="text-[110px]  bg-gradient-to-b from-white to-black bg-clip-text font-extrabold text-transparent">
                    {parseInt(air)}
                  </div>
                  <div className="font-extrabold mb-12 h-6 text-indigo-400">
                    <div className="text-black">Air quality</div>
                    <Air air={air} />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-[110px]  bg-gradient-to-b from-white to-black bg-clip-text font-extrabold text-transparent">
                    {celciusDay}
                    <sup className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">
                      o
                    </sup>
                  </div>
                  <div className="font-extrabold mb-12 h-6 text-indigo-400">
                    {typeOfWeatherDay}
                  </div>
                </div>
              )}
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
            <div onMouseEnter={setBlock} onMouseOut={setBloc}>
              {blocks ? (
                <div>
                  <div className="text-[110px]  bg-gradient-to-b from-white to-black bg-clip-text font-extrabold text-transparent">
                    {parseInt(air)}
                  </div>
                  <div className="font-extrabold mb-12 h-6 text-orange-500">
                    <div className="text-white">Air quality</div>
                    <Air air={air} />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-[110px]  bg-gradient-to-b from-white to-black bg-clip-text font-extrabold text-transparent">
                    {celciusNight}
                    <sup className="text-[110px]  bg-gradient-to-b from-black to-white bg-clip-text font-extrabold text-transparent">
                      o
                    </sup>
                  </div>
                  <div className="font-extrabold mb-12 h-6 text-orange-500">
                    {typeOfWeatherNight}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-20">
              <Footer />
            </div>
          </div>
          <div className="absolute bottom-[70px] right-[230px]">
            <Ball />
          </div>
        </div>
        <Background />
      </div>
    </>
  );
}

export default App;
