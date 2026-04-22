import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'border-yellow-500 bg-yellow-500 text-slate-950 hover:border-yellow-400 hover:bg-yellow-400',
  secondary: 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition duration-300 hover:-translate-y-0.5',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
