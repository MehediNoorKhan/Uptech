import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import WhyChoose from "../components/WhyChoose";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";

export default async function Home() {
  return (
    <>
      <Banner />
      <WhyChoose />
      <FeaturedCategories />
      <FeaturedProducts />
    </>
  );
}
