import React, { FC, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { weatherCardsSelector } from 'redux/cards/selectors';
import { getWeatherCard } from 'redux/cards/actions';
import isDuplicateCity from 'utils/enteredCity';
import Button from 'components/Button';
import Input from 'components/Input';
import Cards from 'components/Cards';

const Main: FC = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const weatherCards = useSelector(weatherCardsSelector);

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
    setError('');
  };

  const getData = () => {
    if (isDuplicateCity(weatherCards, city)) {
      setError('This country is already exist');
    } else {
      dispatch(getWeatherCard(city));
    }
  };

  return (
    <main className="main">
      <div className="main-row">
        <div className="main-row-first">
          <Input className="main-input" onChange={handleChange} placeHolder="Search for location" />
          <Button className="main-button" type="button" onClick={getData} buttonText="Search" />
        </div>
        <span className="error-span">{error}</span>
      </div>
      <Cards />
    </main>
  );
};

export default Main;
