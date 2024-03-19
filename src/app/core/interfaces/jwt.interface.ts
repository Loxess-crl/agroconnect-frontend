import { IUser } from './user.interface';

export interface JWTRequestModel {
  email: string;
  password: string;
}

export interface JWTResponseModel {
  access_token: string;
  token_type: string;
  user: IUser;
  expiresIn: number;
}

export interface JWTRegisterModel {
  email: string;
  password?: string;
  name: string;
  surname: string;
  dni?: string;
  phone?: string;
  distrito_id?: number;
}
