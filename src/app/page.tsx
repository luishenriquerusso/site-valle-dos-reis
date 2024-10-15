import { AboutUs } from "./components/aboutUs";
import { Header } from "./components/header";
import { Banner } from "./components/slider";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center items-center shadow-sm pb-4">
        <Header/>
      </div>

      <main className="p4">
        <Banner/>
        <AboutUs/>
      </main>

      <footer className="bg-slate-100 min-h-48 bottom-0 left-0 right-0">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Coluna 1</h3>
              <p>Conteúdo da primeira coluna</p>
            </div>
            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Coluna 2</h3>
              <p>Conteúdo da segunda coluna</p>
            </div>
            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Coluna 3</h3>
              <p>Conteúdo da terceira coluna</p>
            </div>
            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">Coluna 4</h3>
              <p>Conteúdo da quarta coluna</p>
            </div>
          </div>
        </div>
        <p className="text-center text-sm">Valle dos Reis - Cemitério e Crematório Regis Bittencurt BR-116</p>
      </footer>
    </>
  );
}
