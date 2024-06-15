"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import AutoPlay from "embla-carousel-autoplay";

export const dataCarrousel = [
  {
    id: 1,
    title: "Envío en 24/48 h",
    description: "Como cliente VIP, tus envíos en 24/48 hrs. Obtén mas info",
    link: "#",
  },
  {
    id: 2,
    title: "Consigue hasta un 25% de descuento en compras superiores a 10000",
    description: "Utiliza tus descuentos",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description: "Tienes envíos y devoluciones gratis",
    link: "#",
  },
  {
    id: 4,
    title: "Comprar novedades",
    description: "Todas las novedades a un 50% de descuento",
    link: "#",
  },
];

function CarrouselTextBanner() {

 

  const router = useRouter();
  return (
    <div className="bg-gray-200  dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
      
        plugins={[
          AutoPlay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarrousel.map((car) => (
            <CarouselItem
              key={car.id}
              onClick={() => router.push(car.link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="flex flex-col items-center justify-center p-2 text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {car.title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {car.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarrouselTextBanner;
