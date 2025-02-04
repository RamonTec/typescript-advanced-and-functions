import { IntBaseModel } from "../base.model";

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export interface IntUser extends IntBaseModel  {
  userName: string,
  role: ROLES,
}