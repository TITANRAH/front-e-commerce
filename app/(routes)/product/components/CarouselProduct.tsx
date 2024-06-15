import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Images } from "@/interfaces/ProductBySlugTypes";
import React from "react";
import Image from "next/image";

interface Props {
  images: Images;
}
function CarouselProduct(props: Props) {
  const { images } = props;

  console.log(images);

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.data.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt="imagen product"
                width={600}
                height={600}
                className="rounded-lg"
              ></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
}

export default CarouselProduct;
