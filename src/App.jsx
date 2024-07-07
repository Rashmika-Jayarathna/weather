import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forcast from "./components/Forcast";
import getFormattedWeatherData from "./services/WeatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "landon" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) =>
      setWeather(data)
    );
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formattedBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp <= threshold) return "from-cyan-400 to-blue-700";
    return "from-yellow-500 to-red-500";
  };
  return (
    <div
      className={`mx-auto max-w-screen-xl mt-4 py-5 px-32  bg-gradient-to-br shadow-xl shadow-gray-400 ${formattedBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />

          <Forcast title="3 Hour step forecast" data={weather.hourly} />
          <Forcast title="Daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default App;
