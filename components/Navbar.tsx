"use client";

import { BaggageClaim, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import MenuList from "./MenuList";
import ItemsMenuMobile from "./ItemsMenuMobile";
import ThemSwitcherBtn from "./ThemSiwtchProvider";
import { useCartStore } from "@/stores/cart.store";
import { useProductsLovedStore } from "@/stores/loved.products.store";

function Navbar() {
  const router = useRouter();
  const cart = useCartStore();
  const {lovedItems} = useProductsLovedStore()
  return (
    <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl cursor-pointer" onClick={() => router.push("/")}>
        Titan
        <span className="font-bold">Dev</span>
      </h1>
      <div className="items-center justify-between hidden cursor-pointer sm:flex">
        <MenuList />
      </div>

      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>

      <div className="flex items-center justify-between gap-2 cursor-pointer sm:gap-7">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth={1}
          className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`}
          onClick={() => router.push("/loved-products")}
        />

        <ThemSwitcherBtn />
      </div>
    </div>
  );
}

export default Navbar;
