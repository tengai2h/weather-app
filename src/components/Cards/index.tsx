import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isFulfilledSelector, weatherCardsSelector } from 'redux/cards/selectors';
import { removeCard, updateCardAsync } from 'redux/cards/actions';
import { setIsFulfilled } from 'redux/cards/actionCreators';
import Card from './Card';

const Cards: FC = () => {
  const weatherCards = useSelector(weatherCardsSelector);
  const isFulfilled = useSelector(isFulfilledSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFulfilled) {
      weatherCards.forEach(({ name }) => dispatch(updateCardAsync(name)));
      dispatch(setIsFulfilled());
    }
  }, [dispatch, weatherCards, isFulfilled]);

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
