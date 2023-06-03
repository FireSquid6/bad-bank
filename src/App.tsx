import Header from "./header/Header";

export default function App() {
  return (
    <main role="main" className="bg-zinc-700 h-screen text-white">
      <Header path="/" />
      <h1 className="text-3xl">Hello world!</h1>
    </main>
  );
}
