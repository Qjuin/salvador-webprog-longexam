import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="app-shell min-h-screen text-slate-900">
      <NavBar />
      <main className="app-main pb-16 pt-20">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
