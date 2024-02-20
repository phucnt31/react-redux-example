import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { items } = useSelector((state) => state.example);

  return (
    <>
      <section className="section-center">
        <ToastContainer position="top-center" />
        <Form />
        <Items items={items} />
      </section>
      <section className="section-center-video">
        {items.map((item) => {
          return (
            <iframe
              width="100%"
              height="100%"
              allowFullScreen
              key={item.id}
              src={item.name}
            ></iframe>
          );
        })}
      </section>
    </>
  );
};

export default App;
