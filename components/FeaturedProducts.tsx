"use client";

import { RespType } from "@/interfaces/RespType";
import React, { Suspense } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import useGetFeaturedProductsf from "@/api/useGetFeaturedProductsf";
// import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import SkeletonSquema from "./SkeletonSquema";
import { ProductType } from "@/interfaces/ProductType";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/stores/cart.store";
import { ProductBySlugDatum } from "@/interfaces/ProductBySlugTypes";

function FeaturedProducts() {
  const router = useRouter();
  const { error, result, loading }: RespType = useGetFeaturedProductsf();
  // const { result, loading }: RespType = useGetFeaturedProductsf();
  console.log(result);

  const {addItem} = useCartStore();


  // const items = useCartStore((state) => state.items);


  // console.log(items);
  

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSquema grid={3} />}

          
          {result &&
            result.map((p: ProductBySlugDatum) => {
              const { attributes, id } = p;
              const { slug, images, productName, taste, origin } = attributes;

              console.log(slug);
              
              return (
                <CarouselItem
                  key={p.id}
                  className="md:basis-1/2 lg:basis-1/3 group fade-in"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-400 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                          alt="imagen"
                          width={600}
                          height={600}
                        />

                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5 z-40">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              className="text-gray-600"
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                            />
                            <IconButton
                              className="text-gray-600"
                              onClick={() => addItem(p)}
                              icon={<ShoppingCart size={20} />}
                            />
                          </div>
                        </div>
                      </CardContent>

                      <div className="flex justify-between gap-4 px-8">
                          <h3 className="text-lg font-bold">{productName}</h3>
                          
                          <div className="flex items-center justify-between gap-1 "> 
                              <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark-text-black w-fit">{taste}</p>
                              <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">{origin}</p>
                          </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext className='hidden text-black cursor-pointer sm:flex'/>
      </Carousel>
    </div>
  );
}

export default FeaturedProducts;
