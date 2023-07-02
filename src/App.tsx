import Header from "./header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Operation from "./pages/Operation";

export default function App() {
  return (
    <main role="main" className="bg-zinc-900 h-screen text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<CreateAccount />} />
          <Route
            path="/deposit"
            element={<Operation title="Deposit" input_multiplier={1} />}
          />
          <Route
            path="/withdraw"
            element={<Operation title="Withdraw" input_multiplier={-1} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
