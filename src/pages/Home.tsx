export default function Home() {
  return (
    <div className="flex flex-col align-middle justify-center w-screen h-56 text-center">
      <h1 className="text-3xl">Welcome to the bad bank!</h1>
      <p>
        Please{" "}
        <a className="text-orange-500 hover:text-orange-400" href="/auth">
          Log in or Sign Up
        </a>
      </p>
    </div>
  );
}
