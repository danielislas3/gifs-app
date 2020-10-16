import React from "react";
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid animate__animated animate__fadeIn">
        {gifs.map(gif => (
          <GifGridItem {...gif} key={gif.id} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes={
  category:PropTypes.string.isRequired
}
