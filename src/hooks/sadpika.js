import React, { useState, useEffect } from 'react';
const useFetch = () => {
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.blob();
      const imageObjectURL = URL.createObjectURL(result);
      setData(imageObjectURL);
    } catch (error) {
      console.error("Error fetching the image:", error);
    }
  };

  return [data, fetchData];
};

const sadPoke = () => {
  const [sadPoke, getSadPoke] = useFetch();

  useEffect(() => {
    const url = '/images/rain.jpeg';
    getSadPoke(url);
  }, [getSadPoke]);

  return (
    <div>
      {sadPoke ? <img src={sadPoke} alt="Sad Pokemon" /> : <p>Loading...</p>}
    </div>
  );
};

export default sadPoke;
