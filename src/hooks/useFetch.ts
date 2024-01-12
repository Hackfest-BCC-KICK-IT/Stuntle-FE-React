import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = import.meta.env.VITE_REACT_API_URL;

export const useFetch = <T>(
  config: AxiosRequestConfig<any>,
  isNotSubmit: boolean = false,
  isFormData: boolean = false
): [boolean, T | undefined, object, () => void, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState({});
  const [data, setData] = useState<T>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isNotSubmit) sendRequest();

    return;
  }, []);

  if (isFormData) {
    const formData = new FormData();
    const json = JSON.stringify(config.data["dto"]);
    const blob = new Blob([json], {
      type: "application/json",
    });
    formData.append("image", config.data["image"]);
    formData.append("dto", blob);

    config.data = formData;
  }

  const sendRequest = async () => {
    setIsLoading(true);

    try {
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        setError({});
        setData(res.data);
        setIsSuccess(true);
      }
    } catch (err) {
      setError({ err });
    }

    setIsLoading(false);
  };

  const formSubmit: () => void = () => {
    sendRequest();
  };
  return [isLoading, data, error, formSubmit, isSuccess];
};
