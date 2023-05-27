import { Data, WeaderDataProps, weatherData } from "@/data/weatherData";
import React, { useState } from "react";
import { Marker } from "../Marker";
import { Editing } from "../Editing";

interface IWeatherProps {
  map: any;
}

export function Weather({ map }: IWeatherProps) {
  const [data, setData] = useState<any>(weatherData);
  const [highlight, setHighlight] = useState("");
  const [editing, setEditing] = useState<string | null>(null);

  return (
    <>
      {editing && (
        <Editing
          weather={data[editing]}
          update={(newWeather) => {
            setData((oldState: WeaderDataProps) => {
              return { ...oldState, [editing]: { ...newWeather } };
            });
          }}
          close={() => setEditing(null)}
        />
      )}
      {Object.entries(data as WeaderDataProps).map(([key, weather]) => {
        return (
          <Marker key={key} map={map} position={weather.position}>
            <div
              className={`marker ${weather.climate.toLowerCase()} ${
                highlight === key || editing === key ? "highlight" : ""
              }`}
              onClick={() => {
                highlight === "" ? setHighlight(key) : setHighlight("");
              }}
            >
              <div className="climate-temp">
                <h2>{weather.climate}</h2>
                <div>{weather.temp}°C</div>
              </div>
              {highlight === key || editing === key ? (
                <div className="five-day">
                  <p>Next 5</p>
                  <p>{weather.fiveDays.join(", ")}</p>
                  <button
                    onClick={() => {
                      setEditing(key);
                    }}
                  >
                    Details
                  </button>
                </div>
              ) : null}
            </div>
          </Marker>
        );
      })}
    </>
  );
}
