const Emoji = (props) => {
  const { typeOfWeatherDay } = props;
  console.log({typeOfWeatherDay});
  
  switch (typeOfWeatherDay) {
    case "Sunny":
      return <img className="w-[400px]" src="./public/sunnyDay.png" />;
    case "Clear":
      return <img className="w-[400px]" src="./public/sunnyDay.png" />;
    case "Partly Cloudy ":
        return <img src="./public/partlyCloudyDay.png" />;
    case "Cloudy ":
        return <img src="./public/partlyCloudyDay.png" />;
    case "Overcast":
        return <img src="./public/partlyCloudyDay.png" />;
    case "Windy":
        return  <img src="./public/WindDay.png" />;
    case "Patchy rain nearby":
        return <img src="./public/RainDay.png" />;
    case "Light rain shower":
        return <img src="./public/RainDay.png" />;
    case "Mist":
        return <img src="./public/RainDay.png" />;  
    case "Light freezing rain":
            return <img src="./public/RainDay.png" />;    
    case "Patchy moderate snow":
        return <img src="./public/SnowDay.png" />;
    case "Moderate snow":
        return <img src="./public/SnowDay.png" />;
    case "Light snow":
        return <img src="./public/SnowDay.png" />; 
    case "Heavy snow":
        return <img src="./public/SnowDay.png" />;
    case "Blowing snow":
        return <img src="./public/SnowDay.png" />;
    case "Moderate or heavy snow showers":
        return <img src="./public/SnowDay.png" />; 
    default:
      return <img className="w-[400px]" src="./public/sunnyDay.png" />;
  }
};
export default Emoji;
