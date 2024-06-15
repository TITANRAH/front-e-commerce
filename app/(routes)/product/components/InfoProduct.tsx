import TasteOrigin from "@/components/TasteOrigin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ProductBySlug,
  ProductBySlugDatum,
} from "@/interfaces/ProductBySlugTypes";
import { ProductType } from "@/interfaces/ProductType";
import { formatPrice } from "@/lib/formatPrice";
import { useCartStore } from "@/stores/cart.store";
import { useProductsLovedStore } from "@/stores/loved.products.store";
import { Heart } from "lucide-react";

interface Props {
  product: ProductBySlugDatum;
}

function InfoProduct(props: Props) {
  const { product } = props;

  const { addItem } = useCartStore();
  const { addLovedItem, lovedItems } = useProductsLovedStore();

  console.log(lovedItems);

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.attributes.productName}</h1>

        <TasteOrigin origin={product.attributes.origin} taste={product.attributes.taste}/>
       
      </div>
      <Separator className="my-4" />

      <p className="">{product.attributes.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>

      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar
        </Button>

        <Heart
          strokeWidth={1}
          width={30}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLovedItem(product)}
        />
      </div>
    </div>
  );
}

export default InfoProduct;
