import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const images = [
    "../../../src/assets/img-1.webp",
    "../../../src/assets/img-2.webp", 
    "../../../src/assets/img-3.webp"
  ];

  return (
    <div className="flex items-center justify-center h-[400px] mt-10">
      <div className="w-[1200px] h-full rounded-xl relative overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={prevSlide}>
            <IoIosArrowBack />
          </button>
          <button className="btn btn-circle" onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
