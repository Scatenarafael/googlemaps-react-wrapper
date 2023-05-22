import { weatherData } from "@/data/weatherData";
import React, { useState } from "react";
import { Marker } from "../Marker";

interface IWeatherProps {
  map: any;
}

export function Weather({ map }: IWeatherProps) {
  const [data, setData] = useState(weatherData);
  const [highlight, setHighlight] = useState('');
  const handleMouseEnter = (key: string) => {
    setHighlight(key)
    console.log("entrou!!")
    
  }
  const handleMouseLeave = () => setHighlight('')

  return (
    <>
      {Object.entries(data).map(([key, weather]) => {
        return (
          <Marker key={key} map={map} position={weather.position} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} handleKey={key} >
            <div
              className={`marker ${weather.climate.toLowerCase()} ${
                highlight === key ? "highlight" : ""
              }`}
            >
              <h2>{weather.climate}</h2>
              <div>{weather.temp}C</div>
            </div>
          </Marker>
        );
      })}
    </>
  );
}



