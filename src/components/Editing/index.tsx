import { Data } from "@/data/weatherData";
import React from "react";

export interface IEditingProps {
  weather: any;
  update: (newWeather: Data) => void;
  close: () => void;
}

export function Editing({ weather, update, close }: IEditingProps) {
  return (
    <div className="editing">
      <h2>Editing {weather.name}</h2>

      <label htmlFor="climate">Climate</label>
      <select
        id="climate"
        value={weather.climate}
        onChange={(e) => update({ ...weather, climate: e.target.value })}
      >
        {["Sunny", "Cloudy", "Raining"].map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>

      <label htmlFor="temp">Temperature</label>

      <input
        id="temp"
        type="number"
        value={weather.temp}
        onChange={(e) => update({ ...weather, temp: e.target.value })}
      />

      <button onClick={() => close()}>Close</button>
    </div>
  );
}
