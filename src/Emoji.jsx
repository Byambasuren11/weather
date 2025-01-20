const Emoji = (props) => {
  const { typeOfWeatherDay } = props;
  
  switch (typeOfWeatherDay) {
    case "Sunny":
      return <img className="w-[400px]" src="./public/sunnyDay.webp" />;
    case "Clear":
      return <img className="w-[400px]" src="./public/sunnyDay.webp" />;
    case "Partly Cloudy ":
        return <img src="./public/partlyCloudyDay.webp" />;
    case "Cloudy ":
        return <img src="./public/partlyCloudyDay.webp" />;
    case "Overcast ":
        return <img src="./public/partlyCloudyDay.webp" />;
    case "Windy":
        return  <img src="./public/WindDay.webp" />;
    case "Patchy rain nearby":
        return <img src="./public/RainDay.webp" />;
    case "Light rain shower":
        return <img src="./public/RainDay.webp" />;
    case "Mist":
        return <img src="./public/RainDay.webp" />;  
    case "Light freezing rain":
            return <img src="./public/RainDay.webp" />;    
    case "Patchy moderate snow":
        return <img src="./public/SnowDay.webp" />;
    case "Moderate snow":
        return <img src="./public/SnowDay.webp" />;
    case "Light snow":
        return <img src="./public/SnowDay.webp" />; 
    case "Heavy snow":
        return <img src="./public/SnowDay.webp" />;
    case "Blowing snow":
        return <img src="./public/SnowDay.webp" />;
    case "Moderate or heavy snow showers":
        return <img src="./public/SnowDay.webp" />; 
    default:
      return <img className="w-[400px]" src="./public/sunnyDay.webp" />;
  }
};
export default Emoji;
