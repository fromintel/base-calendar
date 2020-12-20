export enum UserRealm {
  FRONT_END = "Frontend Team",
  DESIGNER = "Design Team",
  BACK_END = "Backend Team",
  MANAGER = "Managers Team",
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  realm: UserRealm;
  vacations: IVacations[];
}

interface IVacations {
  [key: string]: string;
}
