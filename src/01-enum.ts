export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export type User = {
  userName: string,
  role: ROLES,
}

const eliasUser: User = {
  role: ROLES.ADMIN,
  userName: 'eereq'
}