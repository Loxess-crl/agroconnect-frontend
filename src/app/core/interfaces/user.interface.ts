export interface IUser {
  id: number;
  name: string;
  surname?: string;
  dni?: string;
  email: string;
  phone?: string;
  active: number;
  completed: boolean;
  token_fcm?: string;
  role: typeUser;
}

export interface IDataUser {
  id?: number;
  name?: string;
  surname?: string;
  dni?: string;
  email?: string;
  role?: typeUser;
  phone?: string;
  displayAvatar: string;
}
type typeUser = 'CLIENTE' | 'ENCARGADO';
