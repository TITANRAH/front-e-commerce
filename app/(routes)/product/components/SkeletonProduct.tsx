import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function SkeletonProduct() {
  return (
    <div className="grid sm:grid-col-2 sm:py-16 sm:px-4">
      <Skeleton className="h-[200px] w-[350px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 mt-2 w-full" />
        <Skeleton className="h-4 mt-2 w-full" />
        <Skeleton className="h-4 mt-2 w-full" />
 
      </div>
    </div>
  );
}

export default SkeletonProduct;
