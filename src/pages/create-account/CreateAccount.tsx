import { Button, Form, Card } from 'react-bootstrap';
import './CreateAccount.scss';
import { FormEvent, ChangeEvent, useState } from 'react';
import Page from '../pages';


enum InvalidCreateAccountReason {
  UsernameEmpty,
  PasswordInvalid,
  EmailEmpty,
}


function ValidateCreateAccountSubmission(username: string, password: string, email: string): InvalidCreateAccountReason[] {
  let reasons: InvalidCreateAccountReason[] = []
  
  if (username == "") reasons.push(InvalidCreateAccountReason.UsernameEmpty)
  if (password == "" || password.length < 8) reasons.push(InvalidCreateAccountReason.PasswordInvalid)
  if (email == "") reasons.push(InvalidCreateAccountReason.EmailEmpty) 
  
  return reasons
}



export default function CreateAccount({accounts, setAccounts}: Page) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [buttonText, setButtonText] = useState("Add Account");


  const onSubmit = (event: FormEvent) => {
    const validation = ValidateCreateAccountSubmission(username, password, email)
    let reasons = ""
    if (validation.length > 0) {
      validation.forEach((reason) => {
        switch (reason) {
          case InvalidCreateAccountReason.UsernameEmpty:
            reasons += "Username empty\n"
            break;
          case InvalidCreateAccountReason.PasswordInvalid:
            reasons += "Password must be at least 8 characters\n"
            break;
          case InvalidCreateAccountReason.EmailEmpty:
            reasons += "Email empty\n"
            break;
        }
      });
      alert(reasons)
    }
    else {
      console.log("Valid submission")
      
      let newAccounts: any[] = JSON.parse(localStorage.getItem("accounts") as string)
      newAccounts.push({
        username: username,
        password: password,
        email: email,
        balance: 0
      })
      
      localStorage.setItem("accounts", JSON.stringify(newAccounts))
      setAccounts(newAccounts)
      setCreatingAccount(false)
      console.log(newAccounts)
      console.log(accounts)
    }
  }
  
  
  const button = (
    <Button variant="primary" onClick={() => {
      setCreatingAccount(true)
      setButtonText("Create Another Account")
    }}>{buttonText}</Button>
  ) 
  const card = (
    <Card className="create-account-card">
      <h1>Create Account</h1>  
      <Form onSubmit={onSubmit} role="form">
        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="username" onChange={(event) => {setUsername(event.target.value)}} placeholder="Enter name"/>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" onChange={(event) => {setEmail(event.target.value)}} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter Password" onChange={(event) => {setPassword(event.target.value)}} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  )
  
  return (
    <main>
      {creatingAccount ? card : button}
    </main>
  )
}