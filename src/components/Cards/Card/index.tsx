import React, { FC } from 'react';

import { ICardsProps } from '../types';

interface ICardPropsType extends ICardsProps {
  handlerRemoveCard: (id: number) => void;
  handlerUpdateCard: (name: string) => void;
}

const Card: FC<ICardPropsType> = ({ name, main, sys, id, handlerRemoveCard, handlerUpdateCard }: ICardPropsType) => {
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-title">
          {name}, <span>{sys.country}</span>
        </p>
        <p>{Math.round(main.temp)} C</p>
      </div>
      <div className="card-buttons">
        <button className="button" onClick={() => handlerUpdateCard(name)} type="button">
          Update
        </button>
        <button className="button" onClick={() => handlerRemoveCard(id)} type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
