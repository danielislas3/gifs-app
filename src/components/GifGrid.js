import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(gifs => {
      setImages(gifs);
    });
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(gif => (
          <GifGridItem {...gif} key={gif.id} />
        ))}
      </div>
    </>
  );
};
