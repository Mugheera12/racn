import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index}  onSelect={handleSelect}>
      <Carousel.Item>
        <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fapp-banners%2Fwebsite%2Bbanner%2B1920x650%2B(1).webp&w=1920&q=75" alt="" width={"100%"}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fapp-banners%2Fsmoky%2Bgun%2Bfries%2B1920x650.webp&w=1920&q=75" alt=""  width={"100%"}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Franchers.s3.ap-southeast-1.amazonaws.com%2Fapp-banners%2Flocations%2B1920x650.webp&w=1920&q=75" alt=""  width={"100%"}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;