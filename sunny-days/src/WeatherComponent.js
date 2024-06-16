import sun from "./sunny.svg";
import DetailsComponent from "./DetailsComponent";
import { useEffect, useState } from "react";

export default function WeatherComponent({ input }) {
  console.log("input: " + input);
  const [weatherData, setWeatherData] = useState("");
  const search = (city, country) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=ccfcdfc303d2768c571a2235592b7b16`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("network error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData({
          city: data.name,
          country: data.sys.country,
          temp: Math.floor(data.main.temp),
          desc: data.weather[0].main,
          feelsLike: Math.floor(data.main.feels_like),
          humidity: data.main.humidity,
          high: Math.floor(data.main.temp_max),
          low: Math.floor(data.main.temp_min),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!input) {
      search("Fairfax, US");
    } else {
      var loc = input.split(", ");
      search(loc[0], loc[2]);
    }
  }, [input]);

  return (
    <div className="weather">
      <div
        className="location"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>
          {weatherData.city}, {weatherData.country}
        </h1>
      </div>
      <div
        className="icon"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={sun}
          alt="icon"
          className="img-icon"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div
        className="desc"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>{weatherData.desc}</h1>
      </div>
      <div
        className="temp"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
          fontSize: "30px",
          lineHeight: 0,
        }}
      >
        <h1>{weatherData.temp}&deg; F</h1>
      </div>
      <DetailsComponent weatherData={weatherData} />
    </div>
  );
}
