import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState( { 
        city: "Bangalore",
    feelsLike: 20.66,
    humidity: 88,
    temp: 20.28,
    tempMax: 20.28,
    tempMin: 19.9,
    weather: "overcast clouds"
});
let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}

    return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Ameen</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={WeatherInfo}/>
        </div>);
}