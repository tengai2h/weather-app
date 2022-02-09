import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICardsProps } from '../types';
import Button from 'components/Button';

interface ICardPropsType extends ICardsProps {
  handlerRemoveCard: (id: number) => void;
  handlerUpdateCard: (name: string) => void;
}

const Card: FC<ICardPropsType> = ({
  name,
  main,
  sys,
  id,
  handlerRemoveCard,
  handlerUpdateCard,
}: ICardPropsType) => {
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-title">
          {name}, <span>{sys.country}</span>
        </p>
        <p>{Math.round(main.temp)} C</p>
      </div>
      <Link className="link" to={`card/${id}`}>
        Get full info
      </Link>
      <div className="card-buttons">
        <Button
          className="button"
          buttonText="Update"
          onClick={() => handlerUpdateCard(name)}
        />
        <Button
          className="button"
          buttonText="Delete"
          onClick={() => handlerRemoveCard(id)}
        />
      </div>
    </div>
  );
};

export default Card;
