import React from 'react'
import useWindowSize from "./Size"; // Import the shared size state

const Deals = () => {

    const size = useWindowSize(); // Get the shared window size

  return (
    <>
    
        <div className="container-fluid bg-grey p-2 position-sticky z-1" style={{ top: size < 1023 ? "12%" : "19%" }}>
            <div className="container mt-4">
                    <ul className='list-unstyled  text-white fw-bold d-flex gap-3 align-items-center justify-content-center'>
                        <li className='Link'>
                            <a href="#" id='Link1'>Deals</a>
                        </li>
                        <li className='Link'>
                            <a href="#">Chicken Burger</a>
                        </li>
                        <li className='Link'>
                            <a href="#">Beef Burger</a>
                        </li>
                        <li className='Link'>
                            <a href="#">Pizza</a>
                        </li>
                        <li className='Link'>
                            <a href="#">Qucik Bites</a>
                        </li>
                        <li className='Link'>
                            <a href="#">Fries</a>
                        </li>
                        
                    </ul>
               
                
            </div>
        </div>
       
    </>
  )
}

export default Deals