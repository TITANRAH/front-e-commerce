import BannerDiscount from "@/components/BannerDiscount";
import BannerProduct from "@/components/BannerProduct";
import CarrouselTextBanner from "@/components/CarrouselTextBanner";
import ChooseCategory from "@/components/ChooseCategory";
import FeaturedProducts from "@/components/FeaturedProducts";


export default function Home() {


  return (
    <main className="">
     <CarrouselTextBanner/>
     <FeaturedProducts/>
     <BannerDiscount/>
     <ChooseCategory/>
     <BannerProduct/>
    </main>
  );
}
