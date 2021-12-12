//dependencies
import React from "react";
//styles
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1 className="title-home">Hello World!</h1>
      <p className="text-home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        doloribus? Fuga facere perferendis facilis velit quasi eum molestias
        itaque magnam veniam animi? Error provident, expedita consectetur et ab
        sequi ipsum.
      </p>
      <a href="/about">ABOUT</a>
    </div>
  );
};

export default Home;
