"use client";
import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  data: {
    src: string;
    title: string;
    subtitle: string;
    primaryBtn: { text: string; url: string };
    secondaryBtn: { text: string; url: string };
  }[];
}

export default function Slider({ data }: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full group overflow-hidden pb-3 ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map((item, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-95 md:h-112.5">
              <Image src={item.src} fill className="object-cover" alt="Banner" priority={index === 0} />
              
              <div className="absolute inset-0 bg-green-600/70 md:bg-linear-to-r md:from-green-600/80 md:to-transparent z-10" />
              <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-20 text-white">
                <h1 className="text-3xl md:text-5xl font-bold max-w-lg mb-2">{item.title}</h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">{item.subtitle}</p>
                <div className="flex gap-4">
                  <a href={item.primaryBtn.url} className="bg-white text-green-700 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition">
                    {item.primaryBtn.text}
                  </a>
                  <a href={item.secondaryBtn.url} className="border-2 border-white px-6 py-2.5 rounded-lg font-bold hover:bg-white hover:text-green-700 transition">
                    {item.secondaryBtn.text}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex">
      <button onClick={() => emblaApi?.scrollPrev()} className=" absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white cursor-pointer rounded-full flex items-center justify-center text-green-600 shadow-md  transition">
        <ChevronLeft size={28} />
      </button>
      <button onClick={() => emblaApi?.scrollNext()} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white cursor-pointer rounded-full flex items-center justify-center text-green-600 shadow-md  transition">
        <ChevronRight size={28} />
      </button>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 transition-all rounded-full ${selectedIndex === i ? 'w-8 bg-white' : 'w-2.5 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}