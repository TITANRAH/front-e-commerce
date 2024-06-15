import { ProductType } from "@/interfaces/ProductType";
import { useCartStore } from "@/stores/cart.store";
import { useProductsLovedStore } from "@/stores/loved.products.store";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import TasteOrigin from "@/components/TasteOrigin";

interface Props {
  product: ProductType;
}

function LovedItem(props: Props) {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = useProductsLovedStore();
  const { addItem } = useCartStore();

  const addToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };

  return (
    <li className="flex ml-3 py-6 border-b">
      <div onClick={() => router.push(`/product/${product.attributes.slug}`)}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
          width={700}
          height={700}
          alt="image product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
      </div>

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2>{product.attributes.productName}</h2>
          <p className="font-bold">
            {product.attributes.price != 0
              ? formatPrice(product.attributes.price)
              : 0}
          </p>

          <TasteOrigin
            origin={product.attributes.origin}
            taste={product.attributes.taste}
          />

          <Button onClick={() => addToCheckout()} className="mt-5 rounded-full">
            Añadir al carrito
          </Button>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeLovedItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default LovedItem;
