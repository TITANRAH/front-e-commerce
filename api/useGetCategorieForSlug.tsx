import { useEffect, useState } from "react";

function useGetCategorieForSlug(slug: string) {
  console.log("entra");

  const urlBase = process.env.NEXT_PUBLIC_BACKEND_URL;
  const url = `${urlBase}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const resp = await res.json();

        console.log(resp);

        setResult(resp.data);
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

export default useGetCategorieForSlug;

// api/products?populate=*&filters[category][slug][$eq]=capsula
