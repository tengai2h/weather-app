export interface IWeather {
  base: string;
  clouds: IClouds;
  cod: number;
  coord: ICoord;
  dt: number;
  id: number;
  main: IMain;
  name: string;
  sys: ISys;
  timezone: number;
  visibility: number;
  weather: [IWeatherType];
  wind: IWind;
}

interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

interface IWeatherType {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface IClouds {
  all: number;
}

interface ICoord {
  lat: number;
  lon: number;
}

export interface ISys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}
