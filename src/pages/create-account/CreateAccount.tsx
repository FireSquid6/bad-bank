export default function CreateAccount() {
  return (
    <main>
      <h1 role="title">Create Account</h1>
      <form role="form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" role="name" />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" role="email" />
          
        <label htmlFor="password">Password</label>
        <input type="password" id="password" role="password" />
        <button type="submit" role="button">Submit</button>
      </form>
    </main>
  )
}