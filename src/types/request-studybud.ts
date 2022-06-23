import { StatusOnOff } from './context';

export type CreateStudyRequestInput = {
  mission: string;
  missionDes: string;
  point: any;
  pointValue: string;
  requestDes: string;
  standard: string;
  title: string;
  topic: string;
};

export type SearchStudyRequestInput = {
  count?: boolean;
  key?: string;
  limit?: number;
  offset?: number;
  orderBy?: string;
  sortBy?: number;
  userId?: string;
};

export type StudyRequest = {
  _id: string;
  createdAt: Date;
  mission: string;
  missionDes: string;
  owner: string;
  point: number;
  pointValue: string;
  requestDes: string;
  standard: string;
  status: StatusOnOff;
  title: string;
  topic: string;
  updatedAt: Date;
};
