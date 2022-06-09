import { PayloadName } from '@redux/reducer';
import { SocialType, UpdateUserInput, User } from '@type/user';

export type VerifyOAuth2Params = {
  // eslint-disable-next-line camelcase
  access_token: string;
  type: SocialType;
};

export type VerifyOAuthResponse = {
  token: string;
  user: User;
};

export type GetListUserResponse = User[];

export type UpdateProfileParams = {
  variables: UpdateUserInput;
  userId?: string;
};

export type VerifyOAuth2Action = Record<PayloadName, VerifyOAuth2Params>;
export type VerifyOAuthSuccess2Action = Record<PayloadName, VerifyOAuthResponse>;
export type GetListUserSuccessAction = Record<PayloadName, GetListUserResponse>;
export type UpdateProfileAction = Record<PayloadName, UpdateProfileParams>;
export type UpdateProfileSuccessAction = Record<PayloadName, User>;
