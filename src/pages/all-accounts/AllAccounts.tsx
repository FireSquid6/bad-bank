import AccountBox, { AccountBoxProps } from "./AccountBox";
import { useEffect, useState } from "react";
import "./AllAccounts.scss";


export default function AllAccounts() {
  const [accounts, setAccounts] = useState<AccountBoxProps[]>([]);

  useEffect(() => {
    const getAccounts = async () => {
      setAccounts([
        {
          username: "Mr. Butt",
          password: "ilovebutts",
          email: "butt@gmail.com",
          balance: 80000,
        },
      ]);
    };
    getAccounts();
  }, []);

  return (
    <div className="accounts">
      {accounts.map((account) => (
        <AccountBox {...account} />
      ))}
    </div>
  );
}