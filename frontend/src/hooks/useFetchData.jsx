import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before the request
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        console.log(token);
        if (!res.ok) {
          const result = await res.json();
          throw new Error(result.message || "Something went wrong");
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false); // This will always be called after fetch finishes
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
  
};

export default useFetchData;
