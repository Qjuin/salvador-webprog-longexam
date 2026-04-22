import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-white">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full w-full object-cover saturate-110 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center border-2 border-slate-200 bg-white text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Item
          </div>
        )}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-bold text-slate-900">{product.title}</h3>
      <p className="mt-1 text-base font-semibold text-slate-700">{product.price}</p>
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
        {product.content[0]}
      </p>
      <div className="mt-5">
        <Button to={`/products/${product.name}`} className="w-full">
          View Product
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;