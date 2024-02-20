import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "./features/exampleSlice";
import { toast } from "react-toastify";

const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please provide value");
      return;
    }
    if (
      !name.startsWith("https://www.youtube.com/watch") &&
      !name.startsWith("https://www.tiktok.com") &&
      !name.startsWith("https://www.instagram.com")
    ) {
      toast.error("only provide youtube, tik-tok, instagram link");
      return;
    }
    dispatch(addItems({ name }));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>redux example</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
