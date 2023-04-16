import AccountBox, { AccountBoxProps } from "./AccountBox";
import { useEffect, useState } from "react";
import Page from "../pages";
import "./AllAccounts.scss";


export default function AllAccounts({ accounts, setAccounts }: Page) {
  return (
    <div className="accounts">
      {accounts.map((account) => (
        <AccountBox {...account} />
      ))}
    </div>
  );
}