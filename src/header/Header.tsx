export default function Header() {
  return (
    <header className="flex justify-between items-center text-white py-4 px-6 bg-zinc-950 w-full">
      <h1>Bad Bank</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/create-account">Create Account</a>
        <a href="/deposit">Deposit</a>
        <a href="/withdraw">Withdraw</a>
        <a href="/all-data">All Data</a>
      </nav>
    </header>
  );
}
