import { StatusOnOff } from './context';
import { Standard } from './standard';

export type Mission = {
  _id?: string;
  createdAt?: Date;
  name?: string;
  owner?: string;
  standardData?: Standard[];
  standards?: string[];
  status?: StatusOnOff;
  topic?: string;
  updatedAt?: Date;
};
