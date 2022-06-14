export enum Role {
  USER,
  ADMIN,
  CREATOR,
}

export enum UserStatus {
  ACTIVE,
  INACTIVE,
  PAUSE,
  BLOCK,
}

export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

export enum SocialType {
  FACEBOOK,
  GOOGLE,
}

export type JWT = {
  value: string;

  exp: Date;

  createdAt: Date;
};

export type User = {
  _id?: string;

  email?: string;

  username?: string;

  name?: string;

  firstName?: string;

  lastName?: string;

  avatar?: string;

  description?: string;

  phone?: string;

  contact?: string;

  address?: string;

  school?: string;

  socialType?: SocialType;

  socialId?: string;

  gender?: Gender;

  birthday?: Date;

  tokens?: JWT[];

  roles?: Role[];

  status?: UserStatus;

  createdAt?: Date;

  updatedAt?: Date;
};

export type UserSlice = {
  loadingLogin: boolean;
  loadingGetList?: boolean;
  loadingUpdateProfile?: boolean;
  token?: string;
  user?: User;
  list?: User[];
};

export type UpdateUserInput = {
  username: string;
  description: string;
  name: string;
  school: string;
  address: string;
  gender: Gender;
  contact: string;
};

export type SearchUserInput = {
  count?: boolean;

  key?: string;

  limit?: number;

  offset?: number;

  orderBy?: string;

  sortBy?: number;
};

export type GetUserInput = {
  credential: string;
};
