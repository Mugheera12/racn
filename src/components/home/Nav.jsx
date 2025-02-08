import React, { useState } from 'react';
import { MdOutlinePersonOutline, MdOutlineShoppingBag } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import useWindowSize from "./Size"; // Import the shared state
import Dropdown from 'react-bootstrap/Dropdown';
import { RxExit } from 'react-icons/rx';

const Nav = () => {
    const size = useWindowSize(); // Get the shared window size
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            {size < 1023 && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />}
            
            <div className="container-fluid p-3 black position-fixed z-3 top-0 left-0 w-100">
                <div className="d-flex align-items-center justify-content-between">
                    {size < 1023 && (
                        <FaListUl 
                            onClick={() => setOpenSidebar(true)} 
                            size={25} 
                            cursor={"pointer"} 
                            color='white' 
                        />
                    )}
                    
                    <div className={`d-flex align-items-center gap-5 mx-5 ${size < 1023 ? "justify-content-center height-thori" : ""}`} style={{ width: "100%" }}>
                        <Link to="/">
                            <img src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=256&q=75" alt="logo" width={90} />
                        </Link>
                        {size > 1023 && (
                            <ul className='d-flex list-unstyled fw-bold gap-4 fs-5'>
                                <li className='text-white Link'>
                                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                                </li>
                                <li className='text-white Link'>
                                    <Link to="/expansion" className="text-white text-decoration-none">Rancher Expansion</Link>
                                </li>
                                <li className='text-white Link'>
                                    <Link to="/about" className="text-white text-decoration-none">About us</Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="d-flex gap-3">
                        {size > 1023 && (
                            <div className="bg-grey px-3 p-2">
                                <MdOutlineShoppingBag color='white' size={30} />
                            </div>
                        )}
                        <div className="px-1 bg-grey" style={{ width: "37%" }}>
                            <Dropdown>
                                <Dropdown.Toggle variant='hidden' id="dropdown-basic">
                                    <MdOutlinePersonOutline color='white' size={30} />
                                </Dropdown.Toggle> 
                                <Dropdown.Menu className='bg-grey'>
                                    <Dropdown.Item className='fw-bold'>
                                        <Link to="/login" className="text-white text-decoration-none">
                                            <RxExit /> Login
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu> 
                            </Dropdown>       
                        </div>
                    </div>
                </div>
            </div>

            {/* yellow section */}
            {size > 1023 && (
                <div className="bg-orange p-2 position-fixed left-0 w-100 z-1" style={{ top: "12%" }}>
                    <h6 className='fw-bold text-center mt-2'>
                        If you encounter any issue, please visit this website <a href="#" className='cl-brown cl-hov'>link</a>
                    </h6>
                </div>
            )}

            {/* Add margin to push content below fixed elements */}
            <div className="spacer"></div>
        </>
    );
};

export default Nav;
