"use client";

import getProductBySlug from "@/api/getProductBySlug";
import React from "react";
import SkeletonProduct from "../components/SkeletonProduct";
import CarouselProduct from "../components/CarouselProduct";
import InfoProduct from "../components/InfoProduct";
import { ProductBySlugDatum } from "@/interfaces/ProductBySlugTypes";

interface Props {
  searchParams: {
    params: {
      productSlug: string;
    };
  };
}

// { params }: { params: { productSlug: string } }

function ProductSlugPage({ params }: { params: { productSlug: string } }) {
  const slug = params.productSlug;

  console.log(slug);

  const { result } = getProductBySlug(slug);

  // console.log(result?.data.attributes.images);

  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct images={result.data[0].attributes.images} />
        </div>

        <div className="sm:px-12">
          <InfoProduct product={result.data[0] as ProductBySlugDatum} />
        </div>
      </div>
    </div>
  );
}

export default ProductSlugPage;
