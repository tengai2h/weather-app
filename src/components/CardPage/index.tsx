import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import { IInfoCard } from 'components/Pages/CardPage/types';

const CardWithFullInfo: FC<IInfoCard> = ({
  name,
  sys,
  main,
}: IInfoCard) => {
  return (
    <>
      <Link className="link" to="/">
        Main page
      </Link>
      <div className="full-card-wrapper">
        <div className="full-card">
          <div className="full-card-info">
            <p className="full-card-title">
              {name},{' '}
              <span className="full-card-title-country">
                {sys.country}
              </span>
            </p>
            <div className="full-card-temp">
              {Math.round(main.temp)} C
              <div className="max-min-temp">
                <span>Min: {main.temp_min} C</span>
                <span>Max: {main.temp_max} C</span>
              </div>
            </div>
            <div className="bottom-info">
              <div className="feels-like">
                Feels like: {main.feels_like} C
              </div>
              <div className="humidity">
                Humidity: {main.humidity}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWithFullInfo;
