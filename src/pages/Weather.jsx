import { useState } from "react";
import {
  Cloud,
  CloudRain,
  CloudSnow,
  Sun,
  CloudDrizzle,
  Wind,
  Droplets,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
  MapPin,
  Search,
  CloudFog,
} from "lucide-react";

export default function Weather() {
  const [searchCity, setSearchCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  // Mock weather data for different cities
  const weatherData = {
    Mumbai: {
      temp: 31,
      feelsLike: 34,
      condition: "Partly Cloudy",
      humidity: 72,
      windSpeed: 18,
      visibility: 8,
      pressure: 1012,
      sunrise: "6:24 AM",
      sunset: "6:15 PM",
      uvIndex: 8,
      forecast: [
        { day: "Mon", high: 32, low: 26, condition: "Sunny", icon: "sun" },
        { day: "Tue", high: 31, low: 25, condition: "Cloudy", icon: "cloud" },
        { day: "Wed", high: 30, low: 24, condition: "Rain", icon: "rain" },
        { day: "Thu", high: 29, low: 24, condition: "Rain", icon: "rain" },
        { day: "Fri", high: 31, low: 25, condition: "Cloudy", icon: "cloud" },
        { day: "Sat", high: 32, low: 26, condition: "Sunny", icon: "sun" },
        { day: "Sun", high: 33, low: 27, condition: "Sunny", icon: "sun" },
      ],
      hourly: [
        { time: "12 PM", temp: 31, icon: "sun" },
        { time: "1 PM", temp: 32, icon: "sun" },
        { time: "2 PM", temp: 33, icon: "cloud" },
        { time: "3 PM", temp: 32, icon: "cloud" },
        { time: "4 PM", temp: 31, icon: "cloud" },
        { time: "5 PM", temp: 30, icon: "cloud" },
        { time: "6 PM", temp: 29, icon: "cloud" },
        { time: "7 PM", temp: 28, icon: "cloud" },
      ],
    },
    London: {
      temp: 12,
      feelsLike: 9,
      condition: "Rainy",
      humidity: 85,
      windSpeed: 24,
      visibility: 5,
      pressure: 1008,
      sunrise: "7:42 AM",
      sunset: "4:15 PM",
      uvIndex: 2,
      forecast: [
        { day: "Mon", high: 13, low: 8, condition: "Rain", icon: "rain" },
        { day: "Tue", high: 12, low: 7, condition: "Cloudy", icon: "cloud" },
        { day: "Wed", high: 11, low: 6, condition: "Rain", icon: "rain" },
        { day: "Thu", high: 10, low: 5, condition: "Cloudy", icon: "cloud" },
        { day: "Fri", high: 12, low: 7, condition: "Rain", icon: "rain" },
        { day: "Sat", high: 13, low: 8, condition: "Cloudy", icon: "cloud" },
        { day: "Sun", high: 14, low: 9, condition: "Sunny", icon: "sun" },
      ],
      hourly: [
        { time: "12 PM", temp: 11, icon: "rain" },
        { time: "1 PM", temp: 12, icon: "rain" },
        { time: "2 PM", temp: 12, icon: "cloud" },
        { time: "3 PM", temp: 12, icon: "cloud" },
        { time: "4 PM", temp: 11, icon: "cloud" },
        { time: "5 PM", temp: 10, icon: "cloud" },
        { time: "6 PM", temp: 9, icon: "cloud" },
        { time: "7 PM", temp: 9, icon: "cloud" },
      ],
    },
    Tokyo: {
      temp: 18,
      feelsLike: 16,
      condition: "Clear",
      humidity: 55,
      windSpeed: 12,
      visibility: 10,
      pressure: 1015,
      sunrise: "6:32 AM",
      sunset: "4:38 PM",
      uvIndex: 5,
      forecast: [
        { day: "Mon", high: 19, low: 12, condition: "Sunny", icon: "sun" },
        { day: "Tue", high: 20, low: 13, condition: "Sunny", icon: "sun" },
        { day: "Wed", high: 18, low: 11, condition: "Cloudy", icon: "cloud" },
        { day: "Thu", high: 17, low: 10, condition: "Cloudy", icon: "cloud" },
        { day: "Fri", high: 16, low: 9, condition: "Rain", icon: "rain" },
        { day: "Sat", high: 18, low: 11, condition: "Cloudy", icon: "cloud" },
        { day: "Sun", high: 19, low: 12, condition: "Sunny", icon: "sun" },
      ],
      hourly: [
        { time: "12 PM", temp: 17, icon: "sun" },
        { time: "1 PM", temp: 18, icon: "sun" },
        { time: "2 PM", temp: 18, icon: "sun" },
        { time: "3 PM", temp: 18, icon: "sun" },
        { time: "4 PM", temp: 17, icon: "sun" },
        { time: "5 PM", temp: 16, icon: "cloud" },
        { time: "6 PM", temp: 15, icon: "cloud" },
        { time: "7 PM", temp: 14, icon: "cloud" },
      ],
    },
    Bengaluru: {
      temp: 26,
      feelsLike: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 15,
      visibility: 9,
      pressure: 1010,
      sunrise: "6:15 AM",
      sunset: "6:05 PM",
      uvIndex: 7,
      forecast: [
        { day: "Mon", high: 27, low: 19, condition: "Sunny", icon: "sun" },
        { day: "Tue", high: 28, low: 20, condition: "Sunny", icon: "sun" },
        { day: "Wed", high: 26, low: 19, condition: "Cloudy", icon: "cloud" },
        { day: "Thu", high: 25, low: 18, condition: "Rain", icon: "rain" },
        { day: "Fri", high: 24, low: 18, condition: "Rain", icon: "rain" },
        { day: "Sat", high: 26, low: 19, condition: "Cloudy", icon: "cloud" },
        { day: "Sun", high: 27, low: 20, condition: "Sunny", icon: "sun" },
      ],
      hourly: [
        { time: "12 PM", temp: 25, icon: "sun" },
        { time: "1 PM", temp: 26, icon: "sun" },
        { time: "2 PM", temp: 27, icon: "cloud" },
        { time: "3 PM", temp: 27, icon: "cloud" },
        { time: "4 PM", temp: 26, icon: "cloud" },
        { time: "5 PM", temp: 25, icon: "cloud" },
        { time: "6 PM", temp: 24, icon: "cloud" },
        { time: "7 PM", temp: 23, icon: "cloud" },
      ],
    },
  };

  const data = weatherData[selectedCity];

  const getWeatherIcon = (condition, size = 80) => {
    const iconProps = { size, strokeWidth: 1.5 };
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
        return <Sun {...iconProps} className="text-yellow-400" />;
      case "rainy":
      case "rain":
        return <CloudRain {...iconProps} className="text-blue-400" />;
      case "cloudy":
      case "partly cloudy":
        return <Cloud {...iconProps} className="text-gray-400" />;
      case "snow":
        return <CloudSnow {...iconProps} className="text-blue-200" />;
      case "drizzle":
        return <CloudDrizzle {...iconProps} className="text-blue-300" />;
      case "fog":
        return <CloudFog {...iconProps} className="text-gray-300" />;
      default:
        return <Cloud {...iconProps} className="text-gray-400" />;
    }
  };

  const getSmallWeatherIcon = (iconType) => {
    const iconProps = { size: 28, strokeWidth: 2 };
    switch (iconType) {
      case "sun":
        return <Sun {...iconProps} className="text-yellow-400" />;
      case "rain":
        return <CloudRain {...iconProps} className="text-blue-400" />;
      case "cloud":
        return <Cloud {...iconProps} className="text-gray-400" />;
      case "snow":
        return <CloudSnow {...iconProps} className="text-blue-200" />;
      default:
        return <Cloud {...iconProps} className="text-gray-400" />;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity) {
      const cityKey = Object.keys(weatherData).find(
        (key) => key.toLowerCase() === searchCity.toLowerCase()
      );
      if (cityKey) {
        setSelectedCity(cityKey);
        setSearchCity("");
      }
    }
  };
  const getBackgroundGradient = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
        return "from-blue-400 via-blue-300 to-yellow-200";
      case "rainy":
      case "rain":
        return "from-gray-600 via-gray-500 to-blue-400";
      case "cloudy":
      case "partly cloudy":
        return "from-gray-400 via-blue-300 to-blue-200";
      default:
        return "from-blue-400 via-blue-300 to-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Search */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Weather Forecast
          </h1>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Search for a city (Bengaluru,Mumbai, London, Tokyo)..."
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        </div>

        {/* Main Weather Card */}
        <div
          className={`bg-gradient-to-br ${getBackgroundGradient(
            data.condition
          )} rounded-3xl shadow-2xl p-8 mb-6 backdrop-blur-lg`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-6 h-6" />
              <h2 className="text-3xl font-bold">{selectedCity}</h2>
            </div>
            <div className="text-white text-right">
              <p className="text-sm opacity-80">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="flex items-center gap-6">
              {getWeatherIcon(data.condition)}
              <div>
                <p className="text-7xl font-bold text-white">{data.temp}°</p>
                <p className="text-2xl text-white/90 mt-2">{data.condition}</p>
                <p className="text-white/70 mt-1">
                  Feels like {data.feelsLike}°
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">
            Hourly Forecast
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {data.hourly.map((hour, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-xl p-3 text-center hover:bg-white/20 transition-colors"
              >
                <p className="text-white/80 text-sm mb-2">{hour.time}</p>
                <div className="flex justify-center mb-2">
                  {getSmallWeatherIcon(hour.icon)}
                </div>
                <p className="text-white font-semibold">{hour.temp}°</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Wind className="w-6 h-6 text-blue-300" />
              <p className="text-white/70 text-sm">Wind Speed</p>
            </div>
            <p className="text-3xl font-bold text-white">{data.windSpeed}</p>
            <p className="text-white/60 text-sm">km/h</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="w-6 h-6 text-blue-300" />
              <p className="text-white/70 text-sm">Humidity</p>
            </div>
            <p className="text-3xl font-bold text-white">{data.humidity}</p>
            <p className="text-white/60 text-sm">%</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-6 h-6 text-blue-300" />
              <p className="text-white/70 text-sm">Visibility</p>
            </div>
            <p className="text-3xl font-bold text-white">{data.visibility}</p>
            <p className="text-white/60 text-sm">km</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Gauge className="w-6 h-6 text-blue-300" />
              <p className="text-white/70 text-sm">Pressure</p>
            </div>
            <p className="text-3xl font-bold text-white">{data.pressure}</p>
            <p className="text-white/60 text-sm">hPa</p>
          </div>
        </div>

        {/* Sun Times */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-6 h-6 text-white" />
                  <p className="text-white/90 text-sm">Sunrise</p>
                </div>
                <p className="text-3xl font-bold text-white">{data.sunrise}</p>
              </div>
              <Sunrise className="w-16 h-16 text-white/30" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sunset className="w-6 h-6 text-white" />
                  <p className="text-white/90 text-sm">Sunset</p>
                </div>
                <p className="text-3xl font-bold text-white">{data.sunset}</p>
              </div>
              <Sunset className="w-16 h-16 text-white/30" />
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">7-Day Forecast</h3>
          <div className="space-y-3">
            {data.forecast.map((day, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/20 transition-colors"
              >
                <p className="text-white font-semibold w-16">{day.day}</p>
                <div className="flex items-center gap-3 flex-1">
                  {getSmallWeatherIcon(day.icon)}
                  <p className="text-white/80">{day.condition}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-white/60">↓ {day.low}°</p>
                  <p className="text-white font-semibold">↑ {day.high}°</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
