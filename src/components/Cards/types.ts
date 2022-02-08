import { IMain, ISys } from 'types/weatherType';

export interface ICardsProps {
  name: string;
  id: number;
  sys: ISys;
  main: IMain;
}
