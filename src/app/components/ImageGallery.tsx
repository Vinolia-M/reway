import React, { useState } from 'react';
import Image from 'next/image';
import DiscountLabel from './DiscountLabel';
import MainItemImageOne from '../assets/Main-item-Image-01.png';
import MainItemImageTwo from '../assets/Main-item-Image-02.png';
import MainItemImageThree from '../assets/Main-item-Image-03.png';
import MainItemImageFour from '../assets/Main-item-Image-04.png';
import MainItemImageFive from '../assets/Main-item-Image-05.png';
import ArrowLeftImage from '../assets/arrow-left.svg';
import ArrowRightImage from '../assets/arrow-right.svg';

const images = [
    { src: MainItemImageFour, width: 500, height: 500 },
    { src: MainItemImageFive, width: 500, height: 500 },
    { src: MainItemImageOne, width: 500, height: 500 },
    { src: MainItemImageThree, width: 500, height: 500 },
    { src: MainItemImageTwo, width: 500, height: 500 },
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="">
      <DiscountLabel />
      <div className="relative">
        <button 
          onClick={handlePrevImage} 
          className="absolute top-1/2 left-[10px] z-10 transform -translate-y-1/2 text-white">
          <Image src={ArrowLeftImage} width={20} height={20} alt='Arrow Left'/>
        </button>
        <div className="flex justify-center relative">
          <Image 
            src={images[selectedImage].src} 
            alt="Product" 
            className={`w-full max-w-[31rem] ${isZoomed ? 'transform scale-150' : ''}`} 
            width={500} 
            height={500} 
            onClick={toggleZoom}
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 text-black p-[3px] text-12 font-sans rounded">
            {isZoomed ? 'Click to zoom out' : 'Click to enlarge'}
          </div>
        </div>
        <button 
          onClick={handleNextImage} 
          className="absolute top-1/2 right-[10px] transform -translate-y-1/2 text-white">
          <Image src={ArrowRightImage} width={20} height={20} alt='Arrow Right'/>
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`Thumbnail ${index + 1}`}
            className={`w-[87px] h-[120px] mx-2 cursor-pointer border-[2px] ${selectedImage === index ? 'border-Reway-blue' : 'border-transparent'}`}
            width={64}
            height={64}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
