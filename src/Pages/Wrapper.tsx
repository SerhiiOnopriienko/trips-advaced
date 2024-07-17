import { Outlet } from "react-router-dom";
import HeaderMain from "../Components/HeaderMain";
import Footer from "../Components/Footer";

function Wrapper() {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <Footer />
    </>
  );
}

export default Wrapper;
