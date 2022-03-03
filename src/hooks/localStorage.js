import { useEffect, useState } from "react";
const useLocalStorage = (key, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        try {
            const item = localStorage.getItem(key);
            if (item) {
                setItem(JSON.parse(item));
            } else {
                setItem(initialValue);
            }
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveItem = (item) => {
      const parsedItem = JSON.stringify(item);
      localStorage.setItem(key, parsedItem);
        setItem(item);
  }

  return {
    item,
    error,
    isLoading,
    saveItem
  }

};

export default useLocalStorage;
