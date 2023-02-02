import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import ContentDetail from "../components/ContentDetail";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Categories />
      <ContentDetail />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
