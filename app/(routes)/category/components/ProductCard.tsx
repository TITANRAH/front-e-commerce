"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProductType } from "@/interfaces/ProductType";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import IconButton from "@/components/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { ProductBySlugDatum } from "@/interfaces/ProductBySlugTypes";

interface Props {
  product: ProductBySlugDatum;
}

function ProductCard(props: Props) {
  const { product } = props;

  const router = useRouter();

  console.log(product);

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative p-2 duration-100 rounded-lg transi-tion-all fade-in"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.attributes.taste}
        </p>
        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full dark:bg-white d w-fit">
          {product.attributes.taste}
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group">
              <Image
                src={`${image.attributes.url}`}
                width={600}
                height={600}
                alt="foto"
                className="rounded-xl"
              />

              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() =>
                      router.push(`product/${product.attributes.slug}`)
                    }
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={() => console.log("produt")}
                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-2xl text-center">{product.attributes.productName}</p>
      <p className="font-bold text-center">
        {formatPrice(product.attributes.price)}
      </p>
    </Link>
  );
}

export default ProductCard;
