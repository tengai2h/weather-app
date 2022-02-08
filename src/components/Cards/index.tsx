import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeCard, updateCardAsync } from 'redux/cards/actions';
import { weatherCardsSelector } from 'redux/cards/selectors';
import Card from './Card';

const Cards: FC = () => {
  const [isUpdateWeatherCards, setIsUpdateWeatherCards] =
    useState(false);

  const weatherCards = useSelector(weatherCardsSelector);

  const dispatch = useDispatch();

  const handlerRemoveCard = useCallback(
    (city) => {
      dispatch(removeCard(city));
    },
    [dispatch],
  );

  const handlerUpdateCard = useCallback(
    (city) => {
      dispatch(updateCardAsync(city));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isUpdateWeatherCards) {
      weatherCards.forEach(({ name }) =>
        dispatch(updateCardAsync(name)),
      );
      setIsUpdateWeatherCards(true);
    }
  }, [dispatch, weatherCards, isUpdateWeatherCards]);

  return (
    <div className="cards">
      {!weatherCards.length ? (
        <div className="empty">Empty</div>
      ) : (
        weatherCards.map(({ name, id, main, sys }) => {
          return (
            <Card
              name={name}
              main={main}
              sys={sys}
              id={id}
              handlerRemoveCard={handlerRemoveCard}
              handlerUpdateCard={handlerUpdateCard}
              key={id}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
