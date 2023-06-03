import Header from "./header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";

export default function App() {
  return (
    <main role="main" className="bg-zinc-700 h-screen text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
