import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Foot = () => {
  return (
    <>
        <div className="container-fluid black pb-3 p-3" >

            <div className="container d-flex gap-5 align-items-center justify-content-center ">
                <img src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=256&q=75" width={90} alt="" />
                <hr className='h-f-hr' />
                <div className="">
                  <p className='text-white fw-bold'>Follow us</p>
                    <div className="d-flex gap-4 text-white">
                        <FaInstagram size={25} />
                        <FaFacebook  size={25} />
                    </div>
                </div>

            </div>

            <br /><br />
            
            <div className="row mx-5" style={{fontSize:"15px"}}>
                <div className="col-lg-3 col-6 mb-4">
                    <div className="text-white fw-bold">
                        <p>Menu</p>
                        
                        <p className='m-0 f-hover'>Deals</p>
                        <p className='m-0 f-hover'>Chicken Burgers</p>
                        <p className='m-0 f-hover'>Beef Burgers</p>
                        <p className='m-0 f-hover'>Pizza</p>
                        <p className='m-0 f-hover'>Quick Bites</p>
                        <p className='m-0 f-hover'>Fries</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6 ">
                    <div className="text-white fw-bold">
                        <p>Ranchers</p>
                        
                        <p className='m-0 f-hover'>Deals</p>
                        <p className='m-0 f-hover'>Chicken Burgers</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="text-white fw-bold">
                        <p>Locations</p>
                        <p className='m-0 f-hover'>Islamabad</p>
                        <p className='m-0 f-hover'>Rawalpindi</p>
                        <p className='m-0 f-hover'>Peshawar</p>
                        <p className='m-0 f-hover'>Faisalabad</p>
                        <p className='m-0 f-hover'>Sialkot</p>
                        <p className='m-0 f-hover'>Lahore</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="d-flex flex-column gap-5">
                        <img src="https://rancherscafe.com/_next/static/media/Mobile-play-store-badge.6fd9e9fa.svg" alt="" width={150} />
                        <img src="https://rancherscafe.com/_next/static/media/Mobile-app-store-badge.c83f0f3b.svg"  alt="" width={150} />
                    </div>
                </div>
            </div>

            <br /><br />

            <div className="text-white text-center fw-bold">
                <p>All Rights Reserved. 2024© Ranchers Café</p>
                <p>POWERED BY CODISTAN.</p>
            </div>
        </div>
    </>
  )
}

export default Foot