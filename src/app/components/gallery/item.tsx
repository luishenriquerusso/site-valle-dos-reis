'use client'
import { useState, useEffect } from "react";

export const ImageGalleryItem = ({ id }: {id:number}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (isOpen) {
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [isOpen]);

    return (
      <div className="gallery-item relative">
        <img
          src={`/images/gallery/${id}.jpg`}
          alt={`Gallery Image ${id}`}
          className="w-full h-auto cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-500 ease-in-out">
            <img
              src={`/images/gallery/${id}.jpg`}
              alt={`Gallery Image ${id}`}
              className="max-h-full max-w-full transition-transform duration-500 ease-in-out"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </div>
    );
  };