import { useState, useCallback, useEffect } from "react";

const useFetch = (url) => {
  const [allUser, setAllUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(allUser);

  const fetchFunction = useCallback(async () => {
    const responce = await fetch(url);
    const data = await responce.json();
    setAllUser(data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchFunction();
  }, [fetchFunction]);

  return { allUser, isLoading };
};

export default useFetch;
