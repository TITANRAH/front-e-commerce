"use client";

import useGetCategorieForSlug from "@/api/useGetCategorieForSlug";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "@/interfaces/ProductType";
import { RespType } from "@/interfaces/RespType";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "../components/FiltersControlsCategory";
import SkeletonSquema from "@/components/SkeletonSquema";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function CategorySlug() {
  const params = useParams();
  const { categorySlug } = params;
  const [filterOrigin, setFilterOrigin] = useState<string>('')
  console.log(filterOrigin);
  
  console.log(categorySlug);
  
  const { result, loading, error }: RespType = useGetCategorieForSlug(
    categorySlug as string
    );
    
    console.log(result);
    
    const filteredProduct = result != null && !loading && (
      // si el filtro viene vacio filteredProduct es result 
      // si no es filteredProduct es el fltro de result filtrado por el valor que venga e filterOrigin pasado por 
      // props hasta el componente de los radio
      filterOrigin == '' 
        ? result 
        : result.filter((product: ProductType) => product.attributes.origin == filterOrigin)
     )

     console.log(filteredProduct.length);
     
    return (
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result != null && result != '' && !loading && (
        <h1 className="text-3xl font-medium">
          {" "}
          Café {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}

      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-1 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSquema grid={3} />}

          {filteredProduct !== null &&
            !loading &&
            filteredProduct.map((p: ProductType) => <ProductCard key={p.id} product={p} />)}

            {filteredProduct !== null && !loading && filteredProduct.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )}
        </div>
      </div>
    </div>
  );
}

export default CategorySlug;
