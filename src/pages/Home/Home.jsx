import Category from "../../components/Category/Category";
import Order from "../../components/Order/Order";
import Products from "../../components/Products/Products";
import Slide from "../../components/Slide/Slide";
import "./Home.scss";

const Home = () => {
  
  return (
    <>
      <Slide />
      <Order />
      <Category />
      <Products />
    </>
  )
}

export default Home