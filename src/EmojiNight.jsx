const Emoji = (props) => {
    const { typeOfWeatherNight } = props;
    console.log({typeOfWeatherNight});
    
    switch (typeOfWeatherNight) {
      case "Sunny":
        return <img className="w-[400px]" src="./public/sunnyNight.png" />;
      case "Clear":
        return <img className="w-[400px]" src="./public/sunnyNight.png" />;
      case "Partly Cloudy ":
          return <img src="./public/partlyCloudyNight.png" />;
      case "Cloudy ":
          return <img src="./public/partlyCloudyNight.png" />;
      case "Overcast":
          return <img src="./public/partlyCloudyNight.png" />;
      case "Windy":
          return  <img src="./public/WindNight.png" />;
      case "Patchy rain nearby":
          return <img src="./public/RainNight.png" />;
      case "Light rain shower":
          return <img src="./public/RainNight.png" />;
      case "Mist":
          return <img src="./public/RainNight.png" />;  
      case "Light freezing rain":
              return <img src="./public/RainNight.png" />;    
      case "Patchy moderate snow":
          return <img src="./public/SnowNight.png" />;
      case "Moderate snow":
          return <img src="./public/SnowNight.png" />;
      case "Light snow":
          return <img src="./public/SnowNight.png" />; 
      case "Heavy snow":
          return <img src="./public/SnowNight.png" />;
      case "Blowing snow":
          return <img src="./public/SnowNight.png" />;
      case "Moderate or heavy snow showers":
          return <img src="./public/SnowNight.png" />; 
      default:
        return <img className="w-[400px]" src="./public/sunnyNight.png" />;
    }
  };
  export default Emoji;
  