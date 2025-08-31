import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  image?: string;
  link?: string;
  alt?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showButtons?: boolean;
  showDots?: boolean;
  className?: string;
  imageClassName?: string;
  buttonClassName?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showButtons = true,
  showDots = true,
  className = '',
  imageClassName = '',
  buttonClassName = '',
  dotClassName = '',
  activeDotClassName = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (!autoPlay || !items || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items]);

  const goToPrevious = () => {
    if (!items || items.length === 0) return;
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    if (!items || items.length === 0) return;
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return <div className="w-full h-64 bg-gray-200 flex items-center justify-center">No items to display</div>;
  }

  const currentItem = items[currentIndex] || items[0];

  const renderImage = () => {
    const imageElement = (
      <img
        src={currentItem.image}
        alt={currentItem.alt || `Slide ${currentIndex + 1}`}
        className={`max-w-full max-h-full object-contain ${imageClassName}`}
      />
    );

    if (currentItem.link) {
      return (
        <a href={currentItem.link} className="flex items-center justify-center max-w-full max-h-full">
          {imageElement}
        </a>
      );
    }

    return imageElement;
  };

  return (
    <div className={`relative w-full max-h-screen overflow-hidden rounded-lg ${className}`}>
      {/* Main Image */}
      <div className="w-full h-full flex items-center justify-center">
        {renderImage()}
      </div>

      {/* Navigation Buttons */}
      {showButtons && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all ${buttonClassName}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all ${buttonClassName}`}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? `bg-white ${activeDotClassName}`
                  : `bg-white bg-opacity-50 hover:bg-opacity-75 ${dotClassName}`
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;