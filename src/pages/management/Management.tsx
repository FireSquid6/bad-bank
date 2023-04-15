import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import './Management.scss';


interface ManagementPageProps {
  type: string;
  operation_multiplier?: number;
}
function ManagementPage({ type, operation_multiplier = 1 }: ManagementPageProps) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  
  return (
    <main className="management-page">
      <h1 role="title">{ type }</h1>
      <Card>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Enter amount" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={ buttonDisabled }>
            { type }
          </Button>
        </Form>
      </Card>
    </main>
  )
}

function parse_input(input: string): null | number {
  let number = parseFloat(input)
  if (!(isNaN(number) || number < 0)) {
    return number
  } 
  return null
}


export function Withdraw() {
  return (
    <ManagementPage type="Withdraw" operation_multiplier={-1} />
  )
}

export function Deposit() {  
  return (
    <ManagementPage type="Deposit"  />
  )
}



