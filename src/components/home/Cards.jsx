import React from 'react'
import useWindowSize from "./Size"; // Import the shared state

const Cards = () => {
    const size = useWindowSize(); // Get the shared window size
  return (
    <>
            <div className="container-fluid black">
                <div className="container p-3">
                    <h4 className='text-white fs-1 fw-bold'>Deals</h4>
                    {size > 1023 && 
                        <img src="https://ranchers.s3.ap-southeast-1.amazonaws.com/products/sku/images/deals.webp" style={{borderRadius:"10px"}} width={"100%"} alt="" />
                    }
                    
                    <div className="row my-4">
                        <div className="col-lg-4 col-6 mb-4">
                        <div className="card bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fproducts%2Fsku%2Fimages%2Fwild%2Bride%2Bwebsite%2Bwithout%2Bprice%2B(1).webp&w=828&q=75" style={{borderRadius:"10px 10px 0 0"}}  width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                <h5 className="fw-bold text-yellow p-">Any 2 Deal</h5>
                                <p className="text-white fw-bold fs-5">Any 2 burgers and 2 drinks</p>
                                <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6">
                            <div className="card bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FANY-2-DEAL.webp&w=828&q=75" style={{borderRadius:"10px 10px 0 0"}}  width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                <h5 className="fw-bold text-yellow p-">Any 2 Deal</h5>
                                <p className="text-white fw-bold fs-5">Any 2 burgers and 2 drinks</p>
                                <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6">
                            <div className="card bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Ftwo-for-you.webp&w=828&q=75" style={{borderRadius:"10px 10px 0 0"}} width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                <h5 className="fw-bold text-yellow p-">Any 2 Deal</h5>
                                <p className="text-white fw-bold fs-5">Any 2 burgers and 2 drinks</p>
                                <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container p-3">
                    <h4 className='text-white fs-1 fw-bold'>Chicken Burgers</h4>
                    <div className="row">
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FBRONCO..webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FCRONCO.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FCHEE%2BHAW%2BCHICKEN.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FMIGHTY%2BRODEO%2BCHICKEN.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FBIG%2BBANG.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FBIG%2BBEN.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FFAJTIA.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FCOW%2BBOY.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FBRONCO..webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FCRUNCH.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container p-3">
                    <h4 className='text-white fs-1 fw-bold'>Beef Burgers</h4>
                    <div className="row">
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FRANCHERONI.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FCHEE-HAW-BEEF.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FMIGHTY-RODEO-BEEF.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FBUTCHER.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FTEXAS%2BJACK.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FBEEF%2BSTEAK.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container p-3">
                    <h4 className='text-white fs-1 fw-bold'>Pizza</h4>
                    <div className="row">
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Franch%2BspecialComp.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fcrown.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FtandooriComp.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fthin%2Bcrust.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fchicken%2BtikkaComp.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fchicken%2BfajitaComp.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FmargritaComp.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Franch%2BspecialComp.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FpepporoniComp.webp%0A&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="container p-3">
                    <h4 className='text-white fs-1 fw-bold'>Quick Bites</h4>
                    <div className="row">
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fnuggets.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Ffried%2Bchicken.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fwhackkker.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fkids%2Bmeal.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fmessy%2Bwings.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="container p-3">
                    <h4 className='text-white fs-1 fw-bold'>Fries</h4>
                    <div className="row">
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fwaffle%2Bfries.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fsmoky%2Bgun%2Bfries.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fcurly.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Francheese.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fplain%2Bfries.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="card border-0 bg-grey">
                                <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Ffrizza.webp&w=828&q=75" width={"100%"} alt="" />
                                <div className="px-3 p-2">
                                    <h5 className="fw-bold text-yellow">Happines Squared Deal</h5>
                                    <p className="text-white fw-bold fs-5">1 Medium pizza </p>
                                    <div className={`d-flex align-items-center justify-content-between ${size < 1023 ? "flex-column" : "flex-row"}`}>
    <h3 className="fw-bold text-yellow ">Rs.1799</h3>
    <button className="btn bg-red text-white fw-bold px-3 p-2" style={{ width: size < 1023 ? "100%" : "auto" }}>ADD TO CART</button>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    </>
  )
}

export default Cards
