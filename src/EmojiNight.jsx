const Emoji = (props) => {
    const { typeOfWeatherNight } = props;
    
    switch (typeOfWeatherNight) {
      case "Sunny":
        return <img className="w-[400px]" src="./sunnyNight.webp" />;
      case "Clear":
        return <img className="w-[400px]" src="./sunnyNight.webp" />;
      case "Partly Cloudy ":
          return <img src="./partlyCloudyNight.webp" />;
      case "Cloudy ":
          return <img src="./partlyCloudyNight.webp" />;
      case "Overcast ":
          return <img src="./partlyCloudyNight.webp" />;
      case "Windy":
          return  <img src="./WindNight.webp" />;
      case "Patchy rain nearby":
          return <img src="./RainNight.webp" />;
      case "Light rain shower":
          return <img src="./RainNight.webp" />;
      case "Mist":
          return <img src="./RainNight.webp" />;  
      case "Light freezing rain":
              return <img src="./RainNight.webp" />;    
      case "Patchy moderate snow":
          return <img src="./SnowNight.webp" />;
      case "Moderate snow":
          return <img src="./SnowNight.webp" />;
      case "Light snow":
          return <img src="./SnowNight.webp" />; 
      case "Heavy snow":
          return <img src="./SnowNight.webp" />;
      case "Blowing snow":
          return <img src="./SnowNight.webp" />;
      case "Moderate or heavy snow showers":
          return <img src="./SnowNight.webp" />; 
      default:
        return <img className="w-[400px]" src="./sunnyNight.webp" />;
    }
  };
  export default Emoji;
  