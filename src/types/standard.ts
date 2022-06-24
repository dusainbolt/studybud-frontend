import { StatusOnOff } from './context';

export enum PointType {
  INPUT,
  SELECT,
}

export type Standard = {
  _id?: string;
  createdAt?: Date;
  mission?: string;
  name?: string;
  owner?: string;
  point?: number;
  pointData?: string[];
  pointType?: PointType;
  status?: StatusOnOff;
  updatedAt?: Date;
};
