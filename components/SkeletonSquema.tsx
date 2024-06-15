import React from "react";
import { Skeleton } from "./ui/skeleton";

interface Props {
  grid: number;
}

function SkeletonSquema(props: Props) {
  const { grid } = props;

  return Array.from({ length: grid }).map((_, index) => (
    <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
      <Skeleton className="h-[125px] w-[258px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[258px]" />
        <Skeleton className="h-4 w-[258px]" />
      </div>
    </div>
  ));
}

export default SkeletonSquema;
