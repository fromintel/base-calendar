import { User, UserRealm } from "./user";

export interface Team {
  readonly realm: UserRealm;
  readonly percentageOfAbsent: number[];
  readonly members: User[];
}
