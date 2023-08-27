import { useEffect, useState } from "react";

const UseParts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [parts, setParts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/carParts")
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
        setIsLoading(false);
      });
  }, []);
  return [parts, isLoading, setParts];
};

export default UseParts;
