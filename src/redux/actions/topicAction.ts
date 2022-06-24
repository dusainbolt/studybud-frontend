import { PayloadName } from '@redux/reducer';
import { Topic } from '@type/topic';

export type GetAllTopicSuccess = Record<PayloadName, Topic[]>;
