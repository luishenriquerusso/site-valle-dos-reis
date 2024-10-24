import { ImageGalleryItem } from "./item";

export function Gallery() {
  return (
    <div className="container w-full bg-slate-50 py-8 border-slate-200 border-b-2 my-10 mb-28">

<div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Cemitério Valle dos Reis
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 text-center italic">
            Conheça nossos Produtos
          </h3>
          <p className="text-sm font-bold text-gray-800 mb-4 text-center">
            <i>Oferecemos Jazigos, Cremação, Locação e mais. Contate-nos</i>
          </p>
          <hr className="border-t-2 border-[#ae9668] w-1/4 mx-auto"/>
        </div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {[1, 2, 3, 4, 5,6,7,8,9,10].map((id) => (
        <ImageGalleryItem key={id} id={1} />
      ))}
    </div>
  </div>
  )
}