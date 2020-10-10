import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=vEaPTgb1Us1xqjEeRe5Tob3Nbw2FXaDQ&q=rick&limit=10";
    const resp = await fetch(url);
    const { data } = await resp.json(resp);
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map((gif) => (
          <GifGridItem {...gif} key={gif.id}/>
        ))}
      </ol>
    </>
  );
};
