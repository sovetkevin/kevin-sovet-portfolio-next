"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ProjectImage } from '@/data/types';

interface ImageCarouselProps {
  images: ProjectImage[];
  priority?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, priority = false  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const updateHeight = () => {
      const currentImage = imageRefs.current[currentIndex];
      if (currentImage && currentImage.complete) {
        setContainerHeight(currentImage.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [currentIndex]);

  const handleImageLoad = (index: number) => {
    if (index === currentIndex) {
      const img = imageRefs.current[index];
      if (img) {
        setContainerHeight(img.offsetHeight);
      }
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100/50 bg-gray-50">
        <div 
          className="relative overflow-hidden transition-all duration-500"
          style={{ height: containerHeight ? `${containerHeight}px` : 'auto', minHeight: '200px' }}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, height: containerHeight ? `${containerHeight}px` : 'auto' }}
          >
            {images.map((img, index) => (
              <div key={index} className="min-w-full flex items-center justify-center">
                <Image
                  ref={(el) => { imageRefs.current[index] = el; }}
                  src={img.url}
                  alt={img.caption ? `${img.caption} - Image carousel slide ${index + 1}` : `Image carousel slide ${index + 1}`}
                  className="w-full h-auto object-contain"
                  width={1600}
                  height={900}
                  priority={priority && index === 0}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white backdrop-blur-md shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] flex items-center justify-center text-gray-900 transition-all duration-300 border border-black/5 z-10 group/btn cursor-pointer"
              aria-label="Previous image"
            >
              <span className="transition-transform group-hover/btn:-translate-x-1">←</span>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white backdrop-blur-md shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] flex items-center justify-center text-gray-900 transition-all duration-300 border border-black/5 z-10 group/btn cursor-pointer"
              aria-label="Next image"
            >
              <span className="transition-transform group-hover/btn:translate-x-1">→</span>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8 shadow-lg'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images[currentIndex]?.caption && (
        <figcaption className="mt-4 px-1 text-sm text-gray-600 font-light leading-relaxed text-center">
          {images[currentIndex].caption}
        </figcaption>
      )}
    </div>
  );
};

export default ImageCarousel;
