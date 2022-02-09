import { IMain, ISys } from 'types/weatherType';

export interface IInfoCard {
  name: string;
  sys: ISys;
  main: IMain;
}
