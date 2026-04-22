import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300',
    isActive
      ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
      : 'text-slate-600 hover:bg-white hover:text-slate-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-yellow-100 bg-blue-50/88 backdrop-blur-md shadow-sm shadow-blue-900/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <img src={logo} alt="BulldogEx" className="h-10 w-10 rounded-full border-2 border-blue-900 bg-gradient-to-br from-blue-100 to-yellow-50 object-contain shadow-sm" />
          <div className="space-y-0.5 hidden sm:block">
            <p className="text-xl font-bold tracking-tight text-slate-900">BulldogEx <span className="font-light text-slate-500">Shop</span></p>
          </div>
        </NavLink>

        {/* Main Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Auth Navigation (Enhancement 3) */}
        <div className="flex items-center gap-3">
          <Link to="/auth/signin" className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-slate-900">
            Sign In
          </Link>
          <Link to="/auth/signup" className="rounded-full bg-yellow-500 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-lg">
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
};

export default NavBar;