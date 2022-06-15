import { PayloadName } from '@redux/reducer';
import { LoginUserInput, LoginUserOutput, RegisterUserInput, SocialType, UpdateUserInput, User } from '@type/user';

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
export type VerifyTokenAction = Record<PayloadName, string>;
export type RegisterAction = Record<PayloadName, RegisterUserInput>;
export type RegisterActionSuccess = Record<PayloadName, string>;
export type LoginAction = Record<PayloadName, LoginUserInput>;
export type LoginActionSuccess = Record<PayloadName, LoginUserOutput>;
