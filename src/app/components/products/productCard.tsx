import Link from "next/link";

export const ProductCard = ({ product } : { product: Product }) => {

  return(
      <div key={product.id} className="group bg-white border rounded-lg py-2 px-2 hover:scale-95 transition-all min-h-[400px]">

        <div className=" flex items-center justify-end">
        
        </div>

        <Link href={`/produtos/${product.id}`}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
            <img src={product.image} alt={product.name} className="max-h-[248px] w-full object-contain object-center group-hover:opacity-95"/>
          </div>
          <h3 className="mt-4 font-bold text-gray-700 mb-2 group-hover:font-extrabold group-hover:text-gold-1000">
            {product.name}
          </h3>
          <hr/>
          <div className="flex justify-between items-center mb-2.5 mt-2.5">
          <p className=" italic text-xs">{}</p>

          </div>
          <div className=" h-20 overflow-y-auto scrollbar-hide p-1">
            <p className="text-xs text-gray-700 text-justify ">{}</p>
          </div>
        </Link>
   
          <div className="flex items-center mt-4">
            <div className="flex justify-between flex-col w-full">
                <div className="mt-1 text-sx font-bold text-gray-500">
                    <p>Descrição</p>        
                </div>
            </div>
         
          </div>

      </div>
    )
  }