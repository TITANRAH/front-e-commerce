import { useEffect, useState } from "react";

export function useGetCategories() {
  const urlBase = process.env.NEXT_PUBLIC_BACKEND_URL;
  const endpoint = "/api/categories?populate=*";

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${urlBase}${endpoint}`);
        const result = await res.json();
        setResult(result.data);
        console.log(result)
        setLoading(false);
      } catch (error: any) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    })();
  }, [urlBase]);

  return { loading, result, error };
}
