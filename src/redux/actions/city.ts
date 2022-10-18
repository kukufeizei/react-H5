import { INIT_CITY, CHANGE_CITY } from '../constants';

export function initCity(cityName: any) {
  return {
    type: INIT_CITY,
    cityName,
  };
}

export function changeCity(cityName: any) {
  return {
    type: CHANGE_CITY,
    cityName,
  };
}
