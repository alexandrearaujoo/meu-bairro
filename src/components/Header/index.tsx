import { useHistory } from "react-router-dom";
import { HiSearch, HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi";
import { Navbar, HeaderStyled } from "./style";

const Header = () => {
  const history = useHistory<unknown>();

  return (
    <HeaderStyled>
      <Navbar>
        <ul>
          <li>
            <button onClick={() => history.push("/dashboard")}>
              <HiOutlineHome />
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button onClick={() => history.push("/search")}>
              <HiSearch />
              <span>Search</span>
            </button>
          </li>
          <li>
            <button onClick={() => history.push("/profile")}>
              <HiOutlineUserCircle />
              <span>Profile</span>
            </button>
          </li>
        </ul>
      </Navbar>
    </HeaderStyled>
  );
};

export default Header;
