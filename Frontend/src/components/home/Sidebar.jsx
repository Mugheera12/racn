import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom';

const Sidebar = ({ openSidebar,  setOpenSidebar}) => {

  return (
    <>
        <div className={`underlay ${openSidebar ? "opacity-1 transition-slow" : "transform-ny-100 opacity-0 transition-slow"} height-full w-100 position-fixed top-0 z-3`} style={{ background: 'rgba(0,0,0,0.9)' }}>            

            <div className="col-md-8 col-10 height-full bg-black position-fixed top-0 start-0" style={{}}>
                <div className="d-flex p-2 align-items-center justify-content-between">
                    <img src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=256&q=75" width={150} alt="" />
                    
                </div>
                <ul className='d-flex flex-column p-2 list-unstyled my-5 gap-4 fw-bold fs-5'>
                <RxCross1  size={25} color='white' onClick={()=> setOpenSidebar (false)}/>
                <Link to="/" style={{ textDecoration: "none" }} onClick={() => setOpenSidebar(false)}>
                    <li className="text-white">Home</li>
                </Link>
                    <li className='text-white'>
                        Ranchers Expansion
                    </li>
                    <li className='text-white'>
                        About us 
                    </li>           
                </ul>
                <Link to="/signup" className="text-orange" style={{ textDecoration: "none" }}>
                <button className="btn bg-orange fw-bold fs-5 w-100 m-0">
                    Log in 
                </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Sidebar

