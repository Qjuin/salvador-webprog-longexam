import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-yellow-100 bg-blue-50/95 px-4 py-10 shadow-[0_-1px_0_0_rgba(15,23,42,0.04)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <p className="text-xl font-bold tracking-tight text-slate-900">BulldogEx <span className="font-light text-slate-500">Shop</span></p>
          <p className="mt-2 text-sm text-slate-600">Campus essentials, simple ordering. Elevate your daily routine.</p>
        </div>
        
        <nav className="flex gap-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          <Link to="/products" className="transition-colors hover:text-slate-900">Products</Link>
          <Link to="/auth/signin" className="transition-colors hover:text-slate-900">Account</Link>
          <Link to="/about" className="transition-colors hover:text-slate-900">About</Link>
        </nav>

      </div>
    </footer>
  )
}

export default Footer;