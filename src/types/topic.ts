import { StatusOnOff } from './context';
import { Mission } from './mission';

export type Topic = {
  _id?: string;
  createdAt?: Date;
  missionData?: Mission[];
  missions?: string[];
  name?: string;
  owner?: string;
  status?: StatusOnOff;
  updatedAt?: Date;
};

export type TopicSlice = {
  topics?: Topic[];
  loadingTopics?: boolean;
};
