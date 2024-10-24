import Link from "next/link";

export const ProductCard = ({ product } : { product: Product }) => {

  return(
      <div key={product.id} className="group bg-white border rounded-lg py-2 px-2 hover:scale-95 transition-all">

        <div className=" flex items-center justify-end">
        
        </div>

        <Link href={`/produtos/${product.id}`}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
            <img src={product.image} alt={product.name} className="max-h-[248px] w-full object-contain object-center group-hover:opacity-95"/>
          </div>
          <h3 className={`mt-4 font-bold text-gray-700 mb-2  group-hover:font-extrabold group-hover:text-gold-1000 text-center min-h-12`}>
            {product.name}
          </h3>
          <hr/>
          <div className="flex justify-between items-center mb-2.5 mt-6 ">
            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded text-xs">
              Saiba mais
            </button>
            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded text-xs">
              Contratar
            </button>
          </div>
  
        </Link>
   

      </div>
    )
  }