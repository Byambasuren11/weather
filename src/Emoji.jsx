const Emoji = (props) => {
  const { typeOfWeatherDay } = props;
  switch (typeOfWeatherDay) {
    case "Sunny":
      return <img className="w-[400px]" src="./sunnyDay.webp" />;
    case "Clear":
      return <img className="w-[400px]" src="./sunnyDay.webp" />;
    case "Partly Cloudy ":
        return <img src="./partlyCloudyDay.webp" />;
    case "Cloudy ":
        return <img src="./partlyCloudyDay.webp" />;
    case "Overcast ":
        return <img src="./partlyCloudyDay.webp" />;
    case "Windy":
        return  <img src="./WindDay.webp" />;
    case "Patchy rain nearby":
        return <img src="./RainDay.webp" />;
    case "Light rain shower":
        return <img src="./RainDay.webp" />;
    case "Mist":
        return <img src="./RainDay.webp" />;  
    case "Light freezing rain":
            return <img src="./RainDay.webp" />;    
    case "Patchy moderate snow":
        return <img src="./SnowDay.webp" />;
    case "Moderate snow":
        return <img src="./SnowDay.webp" />;
    case "Light snow":
        return <img src="./SnowDay.webp" />; 
    case "Heavy snow":
        return <img src="./SnowDay.webp" />;
    case "Blowing snow":
        return <img src="./SnowDay.webp" />;
    case "Moderate or heavy snow showers":
        return <img src="./SnowDay.webp" />; 
    default:
      return <img className="w-[400px]" src="./sunnyDay.webp" />;
  }
};
export default Emoji;
