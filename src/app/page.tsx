'use client'
import { useState } from "react";
import { AboutUs } from "./components/aboutUs";
import { Features } from "./components/features";
import { Header } from "./components/header";
import { Menu } from "./components/header/menu/menu";
import { Products } from "./components/products";
import { Banner } from "./components/slider";
import { Gallery } from "./components/gallery";

export default function Home() {


  const products: Product[] = [
    {id:1, name:'Jazigo Standart com 3 Gavetas', image:'/images/products/jazigo2.jpg'},
    {id:2, name:'Jazigo Duplo com 3 Gavetas e Área de Serviço', image:'/images/products/jazigo2.jpg'},
    {id:3, name:'Jazigo Triplo com 6 Gavetas e Área de Serviço', image:'/images/products/jazigo2.jpg'},
    {id:4, name:'Jazigo Standart com 4 Gavetas', image:'/images/products/jazigo2.jpg'},
    {id:5, name:'Jazigo Standart com 4 Gavetas', image:'/images/products/jazigo2.jpg'},
    {id:6, name:'Jazigo Standart com 4 Gavetas', image:'/images/products/jazigo2.jpg'}
    ]

  return (
    <>
      <div className=" flex justify-center items-center pb-4  border-slate-50 border-b-2 ">
        <Header/>
      </div>
      <div className=" flex justify-center items-center pb-4  border-slate-100 border-b-2">
        <Menu/>
      </div>

      <main className="p4">
      <div className="w-full bg-slate-50 py-8  border-slate-100 border-b-2">
        <Banner/>
      </div>

      <div className="w-full bg-slate-50 py-8  border-slate-200 border-b-2">
        <Features/>
      </div>
    
      <div className="w-full bg-slate-100 pt-10  border-slate-200 border-b-2">
      <AboutUs/>
      </div>


      <div className="flex justify-center bg-slate-50 pt-10  border-slate-200 border-b-2">
        <Products products={products}/>
      </div>

      <div className="flex justify-center bg-slate-50 pt-10  border-slate-200 border-b-2">
       <Gallery/>
      </div>


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
