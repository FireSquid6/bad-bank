import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import './Management.scss';
import Page from '../pages';

interface ManagementPageProps extends Page{
  type: string;
  operation_multiplier?: number;
  validation?: Function;
}
function ManagementPage({ accounts, setAccounts, type, validation = (input: number, balance: number) => true, operation_multiplier = 1 }: ManagementPageProps) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [amount, setAmount] = useState(0);
  const newAccounts = JSON.parse(localStorage.getItem("accounts") as string)
  
  return (
    <main className="management-page">
      <h1 role="title">{ type }</h1>
      <Card className="management-card">
        <Form>
          <Form.Group>
            <Form.Label>Account</Form.Label>
            <Form.Select onChange = {(event) => {
              setSelectedAccount(parseInt(event.target.value))
            }}>
              { accounts.map((account, index) => (
                <option key={index} value={index}>{ `${account.username} - $${account.balance}` }</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter amount" onChange={(event) => {
              let input = parse_input(event.target.value)
              if (input === -1) {
                setButtonDisabled(true)
              }
              else {
                console.log(input)
                setAmount(input);
                setButtonDisabled(false);
              }
            }} />
          </Form.Group>
          <Button variant="primary" disabled={ buttonDisabled } onClick={() => {
            if (!validation(amount, newAccounts[selectedAccount].balance)) {
              alert("Invalid amount")
              return
            }

            newAccounts[selectedAccount].balance += amount * operation_multiplier

            setAccounts(newAccounts)
            localStorage.setItem("accounts", JSON.stringify(newAccounts))
          }}>
            { type }
          </Button>
        </Form>
      </Card>
    </main>
  )
}

function parse_input(input: string): number {
  let number = parseFloat(input)
  if (number > 0) {
    return number
  } 
  return -1
}


export function Withdraw({ accounts, setAccounts }: Page) {
  return (
    <ManagementPage accounts={accounts} setAccounts={setAccounts} type="Withdraw" operation_multiplier={-1} validation={(input: number, balance: number) => {
      return input <= balance;
    }} />
  )
}

export function Deposit({ accounts, setAccounts }: Page) {  
  return (
    <ManagementPage accounts={accounts} setAccounts={setAccounts} type="Deposit"  />
  )
}



