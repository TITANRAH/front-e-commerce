import { FieldTypes } from '@/interfaces/FieldTypes';
import React, { useEffect, useState } from 'react'

function getProductField() {
    console.log("entra");

    const urlBase = process.env.NEXT_PUBLIC_BACKEND_URL;
    const url = `${urlBase}/api/content-type-builder/content-types/api::product.product`;
    const [result, setResult] = useState<FieldTypes | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
      (async () => {
        try {
          const res = await fetch(url);
          const resp: FieldTypes = await res.json();
  
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
  


export default getProductField