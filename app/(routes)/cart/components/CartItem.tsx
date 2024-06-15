"use client";

import { ProductType } from "@/interfaces/ProductType";
import { useCartStore } from "@/stores/cart.store";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import TasteOrigin from "@/components/TasteOrigin";

interface Props {
  product: ProductType;
}

function CartItem(props: Props) {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCartStore();

  console.log(product);

  return (
    <li className="flex  py-6 border-5">
      <div
        onClick={() => router.push(`/product/${product.attributes.slug}`)}
        className="cursor-pointer"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
          width={500}
          height={500}
          alt="imagen"
          className=" w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-24"
        />
      </div>

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">
            {product.attributes.productName}
          </h2>
          <p className="font-bold">
            {product.attributes.price != 0
              ? formatPrice(product.attributes.price)
              : 0}
          </p>

          <TasteOrigin taste={product.attributes.taste} origin={product.attributes.origin}/>
          
        </div>

        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transion"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
