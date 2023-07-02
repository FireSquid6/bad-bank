import { useLocation } from "react-router-dom";

export interface NavItem {
  label: string;
  path: string;
}

export default function Header() {
  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Login", path: "/auth" },
    { label: "Deposit", path: "/deposit" },
    { label: "Withdraw", path: "/withdraw" },
  ];
  const path = useLocation().pathname;

  return (
    <header className="flex justify-between items-center text-white py-4 px-6 bg-zinc-950 w-full">
      <h1 className="text-xl">Bad Bank</h1>
      <nav>
        {navItems.map((item: NavItem) => (
          <a
            key={item.path}
            href={item.path}
            className={`mx-2 text-lg ${
              path === item.path ? "text-orange-500" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
