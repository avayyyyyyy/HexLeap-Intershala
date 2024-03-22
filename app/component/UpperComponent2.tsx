"use client";
import Image from "next/image";
import React, { useRef } from "react";

const spotlightData = [
  {
    imageSrc: "/image.png",
    title: "Las Vegas Aviators",
    date: "Oct 15 | Sun | 4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    imageSrc: "/image2.png",
    title: "Sacramento River Cats",
    date: "Oct 15 | Sun | 4:30 PM",
    location: "Sutter Health Park, Sacramento, California",
    collection: "Orange Collection",
  },
  {
    imageSrc: "/image.png",
    title: "Las Vegas Aviators",
    date: "Oct 15 | Sun | 4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    imageSrc: "/image2.png",
    title: "Sacramento River Cats",
    date: "Oct 15 | Sun | 4:30 PM",
    location: "Sutter Health Park, Sacramento, California",
    collection: "Orange Collection",
  },
  {
    imageSrc: "/image.png",
    title: "Las Vegas Aviators",
    date: "Oct 15 | Sun | 4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    imageSrc: "/image2.png",
    title: "Sacramento River Cats",
    date: "Oct 15 | Sun | 4:30 PM",
    location: "Sutter Health Park, Sacramento, California",
    collection: "Orange Collection",
  },
  {
    imageSrc: "/image.png",
    title: "Las Vegas Aviators",
    date: "Oct 15 | Sun | 4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
];

const SpotlightCard = ({
  imageSrc,
  title,
  date,
  location,
  collection,
}: {
  imageSrc: string;
  title: string;
  date: string;
  location: string;
  collection: string;
}) => (
  <div className="bg-[#3B3E47] mx-auto shadow-lg w-[237px] py-3">
    <div className="h-[385.31px] min-w-56 relative p-0">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={title}
        loading="lazy"
      />
    </div>
    <div className="text-center text-white"> - - - - - - -</div>
    <div className="text-white mx-auto">
      <div className="text-center">{title}</div>
      <div>
        <div className="text-sm text-center text-zinc-300">{date}</div>
        <div className="text-center text-sm text-zinc-200">{location}</div>
        <div className="p-3 w-fit mx-auto my-2 text-sm bg-black text-white">
          {collection}
        </div>
      </div>
    </div>
  </div>
);

const UpperComponent2 = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" py-24 md:w-[80%] w-[90%] mx-auto relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:-translate-y-3/4 lg:left-4 bg-gray-800 text-white rounded-full p-2"
        onClick={scrollToPrevSlide}
      >
        left
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 lg:-translate-y-3/4 lg:right-4 bg-gray-800 text-white rounded-full p-2"
        onClick={scrollToNextSlide}
      >
        right
      </button>
      <div className="bg-gradient-to-b from-[#18282A] to-[#221A2C] shadow-lg p-5 md:p-10 lg:p-20 relative">
        <div className="text-3xl md:text-5xl text-center text-white py-5 font-bold">
          Collection Spotlight
        </div>
        <div className="w-full py-5 md:py-11 text-center mx-auto text-white">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </div>
        <div className="flex overflow-x-scroll  space-x-4 pb-4" ref={sliderRef}>
          {spotlightData.map((item, index) => (
            <SpotlightCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              date={item.date}
              location={item.location}
              collection={item.collection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperComponent2;
