import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

function BannerDiscount() {
  return (
    <div className="p-5 text-center sm:p-20">
      <h2 className="text-2xl font-black uppercase text-primary">
        Consigue hasta un 25% de descuento
      </h2>
      <h2 className="mt-3 font-semibold">
        20% al gastar 100 o 25 al gastar 124
      </h2>
      <div className="justify-center max-w-md gap-8 mx-auto mt-5 sm:flex">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          Más información
        </Link>
      </div>
    </div>
  );
}

export default BannerDiscount;
