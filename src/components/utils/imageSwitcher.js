import sun from "../../assets/imgs/sun.png";
import cloud from "../../assets/imgs/cloudy.png";
import rainCloud from "../../assets/imgs/cloud-with-rain.png";
import partlyCloud from "../../assets/imgs/partly-cloudy.png";
import snow from "../../assets/imgs/snowy.png";
import thunder from "../../assets/imgs/thunder.png";
import fog from "../../assets/imgs/fog.png";
import lightRain from "../../assets/imgs/light-rain.png";

export const switchImg = (dataValue) => {
  // Switches image depending on value from API data array
  switch (dataValue) {
    case "Clear":
    case "Sunny":
      return sun;
    case "Cloudy":
    case "Overcast":
      return cloud;
    case "Partly cloudy":
      return partlyCloud;
    case "Rainy":
      return rainCloud;
    case "Snowy":
      return snow;
    case "Thunder":
      return thunder;
    case "Fog":
      return fog;
    case "Light rain":
    case "Light drizzle":
      return lightRain;
    default:
      return "Image not available.";
  }
};
