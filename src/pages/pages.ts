export interface Account {
  username: string;
  password: string;
  email: string;
  balance: number;
}
export default interface Page {
  accounts: Account[];
  setAccounts: Function;
}
