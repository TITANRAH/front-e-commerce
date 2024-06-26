"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { useCartStore } from "@/stores/cart.store";
import React from "react";
import CartItem from "./components/CartItem";

function CartPage() {
  const { items, removeAll } = useCartStore();

  const prices = items.map((product) => product.attributes.price);
  const totalPrices = prices.reduce((total, price) => total + price, 0);

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shoping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito</p>}

          <ul>
            {items.map((item) => (
              <CartItem product={item} key={item.id} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100 ">
            <p className="mb-3 text-lg font-semibold md:text-black">
              Order Sumary
            </p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p className="dark:text-black">Order Total</p>
              <p className="dark:text-black">
                {totalPrices != 0 ? formatPrice(totalPrices) : 0}
              </p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full dark:bg-black dark:text-white" onClick={() => console.log("buy")}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
