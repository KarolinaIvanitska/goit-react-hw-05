import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <section className="outlet">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
