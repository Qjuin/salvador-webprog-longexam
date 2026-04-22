import { Outlet } from 'react-router-dom';
import bulldog from '../assets/img/NUbulldog.jpg';

const AuthLayout = () => {
  return (
    <section className="auth-shell min-h-screen text-slate-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="relative h-[42vh] min-h-[18rem] overflow-hidden border-b-2 border-blue-300 lg:h-auto lg:min-h-screen lg:border-b-0 lg:border-r-2 lg:border-blue-300">
          <img
            src={bulldog}
            alt="NU Bulldog"
            className="h-full w-full object-cover"
          />
        </div>

        <main className="relative flex items-center overflow-hidden bg-gradient-to-b from-yellow-200/55 via-slate-100 to-blue-200/70 px-6 py-10 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(246,194,15,0.28),transparent_42%),radial-gradient(circle_at_82%_88%,rgba(37,99,235,0.22),transparent_44%)]" />

          <div className="relative z-10 mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
