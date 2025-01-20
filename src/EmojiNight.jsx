const Emoji = (props) => {
    const { typeOfWeatherNight } = props;
    
    switch (typeOfWeatherNight) {
      case "Sunny":
        return <img className="w-[400px]" src="./public/sunnyNight.webp" />;
      case "Clear":
        return <img className="w-[400px]" src="./public/sunnyNight.webp" />;
      case "Partly Cloudy ":
          return <img src="./public/partlyCloudyNight.webp" />;
      case "Cloudy ":
          return <img src="./public/partlyCloudyNight.webp" />;
      case "Overcast ":
          return <img src="./public/partlyCloudyNight.webp" />;
      case "Windy":
          return  <img src="./public/WindNight.webp" />;
      case "Patchy rain nearby":
          return <img src="./public/RainNight.webp" />;
      case "Light rain shower":
          return <img src="./public/RainNight.webp" />;
      case "Mist":
          return <img src="./public/RainNight.webp" />;  
      case "Light freezing rain":
              return <img src="./public/RainNight.webp" />;    
      case "Patchy moderate snow":
          return <img src="./public/SnowNight.webp" />;
      case "Moderate snow":
          return <img src="./public/SnowNight.webp" />;
      case "Light snow":
          return <img src="./public/SnowNight.webp" />; 
      case "Heavy snow":
          return <img src="./public/SnowNight.webp" />;
      case "Blowing snow":
          return <img src="./public/SnowNight.webp" />;
      case "Moderate or heavy snow showers":
          return <img src="./public/SnowNight.webp" />; 
      default:
        return <img className="w-[400px]" src="./public/sunnyNight.webp" />;
    }
  };
  export default Emoji;
  