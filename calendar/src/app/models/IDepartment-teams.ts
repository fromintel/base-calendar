export interface IDepartment {
  teams: ITeams[];
}
interface ITeams {
  readonly members: IMembers[];
  readonly name: string;
  readonly percentageOfAbsent: number[];
}

interface IMembers {
  name: string;
  vacations: IVacations[]
}

interface IVacations {
  [ key: string]: string;
}
