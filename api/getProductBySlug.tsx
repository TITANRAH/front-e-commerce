import { ProductBySlug } from "@/interfaces/ProductBySlugTypes";
import { useEffect, useState } from "react";

function getProductBySlug(slug: string | string[]) {
  console.log("entra");

  const urlBase = process.env.NEXT_PUBLIC_BACKEND_URL;
  const url = `${urlBase}/api/products?filters[slug][$eq]=${slug}&populate=*`;
  const [result, setResult] = useState<ProductBySlug | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const resp: ProductBySlug = await res.json();

        console.log(resp);

        setResult(resp);
        setLoading(false);
      } catch (error: any) {
        console.log(error);

        setError(error.message);
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}

export default getProductBySlug;
