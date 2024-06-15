import { ProductAttributes, ProductType } from "@/interfaces/ProductType";
import { RespType } from "@/interfaces/RespType";

export const useGetFeaturedProducts = async (): Promise<{
  result: any | null;
  error: string;
}> => {
  const urlBase = process.env.NEXT_PUBLIC_BACKEND_URL;
  const endPoint = "/api/products?filters[isFeatured][$eq]=true&populate=*";

  try {
    // Simulando un retraso de 1 segundo antes de realizar la solicitud
   

    const result = await fetch(`${urlBase}${endPoint}`, {
      method: "GET",
    });
    const products: any = await result.json();

    console.log(products);
    

    return {
      result: products,
      error: "",
    };
  } catch (error: any) {
    console.log(error);

    return {
      result: null,
      error: error.message,
    };
  }
};
