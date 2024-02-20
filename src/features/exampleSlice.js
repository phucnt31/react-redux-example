import { createSlice } from "@reduxjs/toolkit";
import { convertString } from "../utils/convertString";
import { toast } from "react-toastify";

const initialState = {
  items: [],
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      const newName = convertString(payload.name);
      const newItem = {
        id: new Date().getTime().toString(),
        name: newName,
      };
      if (state.items.length === 3) {
        toast.error("Only 3 links are allowed");
        return;
      }
      state.items = [...state.items, newItem];
      toast.success("New link added");
    },
    removeItem: (state, { payload }) => {
      const newItem = state.items.filter((item) => item.id !== payload.id);
      state.items = newItem;
      toast.success("Link removed");
    },
  },
});

export const { addItems, removeItem } = exampleSlice.actions;

export default exampleSlice.reducer;
