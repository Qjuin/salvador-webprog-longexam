import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50 px-6 py-24 text-center sm:py-32 lg:px-8">
      <p className="text-base font-semibold uppercase leading-8 tracking-[0.2em] text-slate-500">404 Error</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Page not found</h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-7 text-slate-600">
        Sorry, we couldn't find the page you're looking for. It might have been moved or removed from the catalog.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button to="/" variant="primary">
          Go back home
        </Button>
        <Link to="/products" className="text-sm font-semibold text-slate-900 transition-colors hover:text-slate-600">
          Browse Catalog <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;