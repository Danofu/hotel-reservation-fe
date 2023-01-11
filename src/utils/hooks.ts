import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { AXIOS_MAIN_INSTANCE } from 'app-globals';

/**
 * The utility react hook that uses axios instance to fetch data from the given URL.
 *
 * @template T
 * @typeParam T - type of the axios response
 * @param url - the URL to fetch from
 * @param config - the config of the `instance`
 * @param instance - the instance of the {@link https://axios-http.com/docs/intro | axios}
 * @returns The object with **data** from URL response, **error** from response (if their any) and **fetching** state.
 *
 * @category Hooks
 */
export const useAxios = <T>(
  url: string,
  config?: AxiosRequestConfig,
  instance: AxiosInstance = AXIOS_MAIN_INSTANCE
) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const request = async () => {
      setLoading(true);

      try {
        const response = await instance.request<T>({ ...config, signal: controller.signal, url });
        if (response.statusText !== 'OK') {
          setData(undefined);
          setError(new Error(response.statusText));
          return;
        }

        setData(response.data);
        setError(undefined);
      } catch (err) {
        setData(undefined);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    void request();

    return () => void controller.abort();
  }, [config, instance, url]);

  return { data, error, loading, setData };
};
