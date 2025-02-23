import React, { useEffect, useState } from "react";
import { MdOutlinePersonOutline, MdOutlineShoppingBag } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import useWindowSize from "./Size"; // Import the shared state
import Dropdown from "react-bootstrap/Dropdown";
import { RxExit } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { userReset } from "../../features/users/userSlice";
import { getMyCartData } from "../../features/products/productSlice";

const Nav = () => {
  const size = useWindowSize(); // Get the shared window size
  const [openSidebar, setOpenSidebar] = useState(false);

  const { cart, products } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getMyCartData());
  }, []);

  // Redux: Get user data from the store
  const user = useSelector((state) => state.auth.user); // Accessing the logged-in user from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    dispatch(userReset()); // Reset the user state
    localStorage.removeItem("myUser"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page
  };
  const calculateCost = () => {
    let sum = 0;
    cart?.map((item, index) => {
      let myProduct = products.find((item2, index2) => {
        return item2._id == item?.product_id;
      });
      let price = myProduct?.product_base_price * item.quantity;
      sum += price;
    });
    return sum;
  };
  const totalItems = () => {
    let total = 0;
    cart?.map((item, index) => {
      total += item.quantity;
    });
    return total;
  };

  

  return (
    <>
      {size < 1023 && (
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}

      <div className="container-fluid p-3 black position-fixed z-3 top-0 left-0 w-100">
        <div className="d-flex align-items-center justify-content-between">
          {size < 1023 && (
            <FaListUl
              onClick={() => setOpenSidebar(true)}
              size={25}
              cursor={"pointer"}
              color="white"
            />
          )}

          <div
            className={`d-flex align-items-center gap-5 mx-5 ${
              size < 1023 ? "justify-content-center height-thori" : ""
            }`}
            style={{ width: "100%" }}
          >
            <Link to="/">
              <img
                src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=256&q=75"
                alt="logo"
                width={90}
              />
            </Link>
            {size > 1023 && (
              <ul className="d-flex list-unstyled fw-bold gap-4 fs-5">
                <li className="text-white Link">
                  <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="text-white Link">
                  <Link
                    to="/expansion"
                    className="text-white text-decoration-none"
                  >
                    Rancher Expansion
                  </Link>
                </li>
                <li className="text-white Link">
                  <Link to="/about" className="text-white text-decoration-none">
                    About us
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="d-flex gap-3">
            
              <Link
                to={"/cart"}
                className="d-flex text-decoration-none flex-column position-relative bg-grey px-3 p-2"
              >
                <div
                  className="count text-sm fw-bold position-absolute bg-danger text-white p-2"
                  style={{ right: "23%", top: "-1%", clipPath: "circle()" }}
                >
                  {totalItems()}
                </div>
                <MdOutlineShoppingBag color="white" size={30} />
                <h6 className="m-0 text-white">${calculateCost()}</h6>
              </Link>
            
            <div className="px-1 bg-grey" style={{ width: "37%" }}>
              <Dropdown>
                <Dropdown.Toggle variant="hidden" id="dropdown-basic">
                  <MdOutlinePersonOutline color="white" size={30} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-grey">
                  {user ? (
                    <>
                      <Dropdown.Item className="fw-bold">
                        <span className="text-white">
                          {user.username} {/* Display logged-in user's name */}
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="fw-bold text-white"
                        onClick={logout}
                      >
                        <RxExit /> Logout
                      </Dropdown.Item>
                    </>
                  ) : (
                    <Dropdown.Item className="fw-bold">
                      <Link
                        to="/login"
                        className="text-white text-decoration-none"
                      >
                        <RxExit /> Login
                      </Link>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      {/* yellow section */}
      {size > 1023 && (
        <div
          className="bg-orange p-2 position-fixed left-0 w-100 z-1"
          style={{ top: "15%" }}
        >
          <h6 className="fw-bold text-center mt-2">
            If you encounter any issue, please visit this website{" "}
            <a href="#" className="cl-brown cl-hov">
              link
            </a>
          </h6>
        </div>
      )}

      {/* Add margin to push content below fixed elements */}
      <div className="spacer"></div>
    </>
  );
};

export default Nav;
