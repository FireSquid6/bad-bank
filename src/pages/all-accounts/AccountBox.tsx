import { Card } from "react-bootstrap";



export interface AccountBoxProps {
  username: string;
  password: string;
  email: string;
  balance: number;
}

export default function AccountBox({ username, password, email, balance }: AccountBoxProps) {
  return (
    <Card className="account-card">
      <Card.Body>
        <Card.Title>Account</Card.Title>
        <Card.Text>
          Username: {username}
        </Card.Text>
        <Card.Text>
          Password: {password}
        </Card.Text>
        <Card.Text>
          Email: {email}
        </Card.Text>
        <Card.Text>
          Balance: {balance}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}