import { IWeather } from 'types/weatherType';

const isDuplicateCity = (cards: IWeather[], city: string) => cards.some(({ name }) => name === city);

export default isDuplicateCity;
