'use client'

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "./productCard"

export function Products({ products }: {products: any[]}) {

  return (
    <Carousel className="container ">
      
      <CarouselContent>
        {products?.map((product : any, index: any) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-4 md:p-8 max-w-80">            
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}