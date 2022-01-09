import { useEffect, useState } from "react";

const doProm = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("updated"), 1000);
  });

export const Button = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const result = await doProm()
      setData(result);
    };
    fetcher();
  }, [setData]);

  return <button>I am a button {data}</button>;
};
