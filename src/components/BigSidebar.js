import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSidebar";
import Navlink from "./Navlink";
import Logo from "./logo";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlink />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
