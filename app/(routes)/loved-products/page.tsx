"use client";

import { useProductsLovedStore } from "@/stores/loved.products.store";
import React from "react";
import LovedItem from "./components/LovedItem";

function LovedProductPage() {
  const { lovedItems } = useProductsLovedStore();

  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
      {lovedItems.length !== 0 ? (
        <h1 className="sm:text-2xl">Productos Favoritos 🩶</h1>
      ) : (
        <h1 className="sm:text-2xl">Añade tus productos favoritos</h1>
      )}

      <div>
        <div>
          {lovedItems.map((item) => (
            <LovedItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LovedProductPage;
