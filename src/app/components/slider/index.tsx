'use client'
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from './db';

export function Banner() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction: 'prev' | 'next' | number) => {
    setCurrentIndex((prevIndex) => {
      if (typeof direction === 'number') return direction;
      return slides.reduce((newIndex, _, index, array) => {
        if (direction === 'prev') {
          return prevIndex === 0 ? array.length - 1 : prevIndex - 1;
        } else {
          return prevIndex === array.length - 1 ? 0 : prevIndex + 1;
        }
      }, prevIndex);
    });
  };

  const prevSlide = () => changeSlide('prev');
  const nextSlide = () => changeSlide('next');
  const goToSlide = (slideIndex: number) => changeSlide(slideIndex);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className='max-w-[1380px] h-[640px] w-full m-auto pb-12 relative group opacity-90 p-4 rounded-lg '>
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover duration-500 rounded-lg'></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' style={{ zIndex: 2 }}>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ' style={{ zIndex: 2 }}>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex items-center justify-center absolute inset-0'>
        <div className='text-center'>
          <p className={`text-3xl font-bold mb-4 ${slides[currentIndex].titleColor}` }>{slides[currentIndex]?.title} <br/> {slides[currentIndex]?.titleBr}</p>     
          <p className='text-center pl-10 pr-10 pb-8'>{slides[currentIndex]?.sub}</p>  
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'><RxDotFilled color={"#ae9668"}/></div>
        ))}
      </div>
    </div>
  );
}