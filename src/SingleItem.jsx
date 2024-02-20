import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "./features/exampleSlice";

const SingleItem = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <article className="single-item">
      <p>{name}</p>
      <button
        type="button"
        onClick={() => dispatch(removeItem({ id }))}
        className="btn remove-btn"
      >
        remove
      </button>
    </article>
  );
};

export default SingleItem;
