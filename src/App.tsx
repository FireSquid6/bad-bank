import Header from "./header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <main role="main" className="bg-zinc-700 h-screen text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
