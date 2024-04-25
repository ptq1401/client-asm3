import Footer from "../components/HomePage/Footer";
import Banner from "../components/HomePage/Banner";
import Categories from "../components/HomePage/Categories";
import ProductList from "../components/HomePage/ProductList";
import Information from "../components/HomePage/Information";
import Popup from "../components/Popup/Popup";
import { useSelector } from "react-redux";

//-----------------------HomePage-------------------
function HomePage() {
  //---redux---
  const display = useSelector((state) => state.popup.display);

  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <ProductList></ProductList>
      <Information></Information>
      {display && <Popup></Popup>}
      <Footer></Footer>
    </>
  );
}
////------------------------
export default HomePage;
