import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { weatherCardsSelector } from 'redux/cards/selectors';
import CardWithFullInfo from 'components/CardPage';

const CardPage: FC = () => {
  const { id } = useParams();

  const card = useSelector(weatherCardsSelector);

  const filteredCard = card.find((elem) => elem.id.toString() === id);

  return (
    <>
      {filteredCard && (
        <CardWithFullInfo
          key={id}
          name={filteredCard.name}
          sys={filteredCard.sys}
          main={filteredCard.main}
        />
      )}
    </>
  );
};

export default CardPage;
