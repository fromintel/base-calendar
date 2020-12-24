export enum UserRealm {
  FRONT_END = 'FRONT_END',
  BACK_END = 'BACK_END',
  DESIGNER = 'DESIGNER',
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  realm: UserRealm;
}
