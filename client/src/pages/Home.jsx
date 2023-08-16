import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
