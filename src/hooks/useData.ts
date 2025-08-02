import dataSrv from "@/services/dataSrv";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState, type DependencyList } from "react";



interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint : string , params? : AxiosRequestConfig, deps? : DependencyList  ) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    dataSrv
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal , ...params })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {

        if (error instanceof CanceledError) return;

        setError(error.message);
        setLoading(false);

      });

    return () => controller.abort();
  }, deps? [...deps] : []);

  return {
    data,
    error,
    isLoading,
  };
};

export default useData;
