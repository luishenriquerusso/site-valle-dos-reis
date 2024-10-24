'use client'

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "./productCard"

export function Products({ products }: {products: Product[]}) {
  return (
    <div className="mt-16">
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

      <Carousel className="container mb-32">
        <CarouselContent>
          {products?.map((product : Product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-4 md:p-8 max-w-80">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>


    </div>
  )
}