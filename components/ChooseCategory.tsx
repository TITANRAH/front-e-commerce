"use client";

import { useGetCategories } from "@/api/useGetCategories";
import { Category } from "@/interfaces/ProductType";
import { RespType } from "@/interfaces/RespType";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { DataCategory } from "@/interfaces/Category";

function ChooseCategory() {
  const { result, loading, error }: RespType = useGetCategories();

  console.log(result);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría </h3>

      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          result != null &&
          result.map((cat: DataCategory) => (
            <Link
              key={cat.id}
              href={`/category/${cat.attributes.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${cat.attributes.mainImage.data.attributes.url}`}
                alt={cat.attributes.categoryName}
                width={300}
                height={300}
                className="max-w-[270px] h-[400px] w-full gap-0 transition duration-300 ease-in-out rounded-lg hover:scale-110"
              />

              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{cat.attributes.categoryName}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ChooseCategory;
