import { useLocation, Location } from 'react-router-dom';
import './Header.css';

interface NavItem {
  name: string;
  path: string;
}


export default function Header() {
  let location: string = "/"
  try {
    location = useLocation().pathname;
  }
  catch (e) {
    console.log(e);
  }

  const navItems: NavItem[] = [
    { name: 'Home', path: '/'},
    { name: 'Create Account', path: '/create-account' },
    { name: 'Withdraw', path: '/withdraw' },
    { name: 'Deposit', path: '/deposit' },
    { name: 'All Data', path: '/alldata' },
  ];
  
  return (
    <header className="header">
      <h1>Bad Bank</h1>
      <nav>
        {navItems.map((item: NavItem) => (
          <a
            key={item.name}
            className={location === item.path ? 'nav-item active' : 'nav-item'}
            >{item.name}</a>
        ))}
      </nav>
    </header>
  )
}