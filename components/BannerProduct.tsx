import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function BannerProduct() {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumergete en una experiencia unica</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Café exquisito
        </h4>
        <p className="my-2 text-lg">Despierta tus sentidos en cada sorbo</p>

        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>

        <div className="h-[300px] bg-cover lg:h-[900px] bg-[url('/slider-image.jpg')] bg-center mt-5" />
      </div>
    </>
  );
}

export default BannerProduct;
