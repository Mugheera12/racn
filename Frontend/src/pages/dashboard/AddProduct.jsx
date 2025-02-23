import React, { useState } from 'react'
import { FaListUl } from 'react-icons/fa'
import { MdOutlinePersonOutline, MdOutlineShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'
import useWindowSize from '../../components/home/Size'
import { RxExit } from 'react-icons/rx'
import Dropdown from 'react-bootstrap/Dropdown';
import ProductsSection from '../../components/admin/ProductsSection'

const AddProduct = () => {
    const size = useWindowSize();
    const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
        <div className="container-fluid p-3 black ">
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
        <div className="row">
            <div className="">
                <ProductsSection />
            </div>
        </div>    
    </>
  )
}

export default AddProduct