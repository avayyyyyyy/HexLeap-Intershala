import Image from "next/image";
import React from "react";

const sportsData = [
  {
    id: 1,
    imageSrc: "/SacramentoRiverCats.jpeg",
    title: "Sacramento River Cats",
    totalEvents: 48,
    sportType: "Baseball",
  },
  {
    id: 2,
    imageSrc: "/lasvegas.png",
    title: "Las Vegas Aviators",
    totalEvents: 28,
    sportType: "Baseball",
  },
  {
    id: 3,
    imageSrc: "/newjerseydevils.png",
    title: "New Jersey Devils",
    totalEvents: 15,
    sportType: "Ice-Hockey",
  },
  {
    id: 4,
    imageSrc: "/lasvegas.png",
    title: "Sacramento River Cats",
    totalEvents: 48,
    sportType: "Baseball",
  },
];

const SportsCard = ({
  imageSrc,
  title,
  totalEvents,
  sportType,
}: {
  imageSrc: string;
  title: string;
  totalEvents: number;
  sportType: string;
}) => (
  <div className="bg-[#3B3E47] shadow-lg p-3 w-fit">
    <div className="w-[217px] h-[385.31px] relative">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={title}
        loading="lazy"
      />
    </div>

    <div>
      <div className="font-medium text-lg text-white py-2">{title}</div>
      <div className="flex justify-between bg-[#292B32] p-2 text-white">
        <div className="">
          <div className="font-normal">Total Events</div>
          <div className="font-medium">{totalEvents} Events</div>
        </div>
        <div>
          <div className="font-normal">Sports</div>
          <div className="font-medium">{sportType}</div>
        </div>
      </div>
    </div>
  </div>
);

const Advertisement = () => (
  <div className="bg-[#3B3E47] p-3 w-fit">
    <div className=" relative">
      <Image
        width={220}
        height={300}
        src="/ad.png"
        objectFit="cover"
        objectPosition="center"
        alt="Advertisement"
        loading="lazy"
      />
    </div>
    <div>
      <div className="font-medium text-lg text-white py-2">Advertisement</div>
      <div className="flex justify-between bg-[#292B32] p-2 text-white">
        <div className="w-48 text-zinc-300 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  </div>
);

const UpperComponent1 = () => {
  return (
    <div className="w-[80%] mx-auto py-20">
      <div className="font-bold text-4xl text-white py-4">Sports</div>
      <div className="flex  overflow-x-scroll gap-3">
        {sportsData.map((sport) => (
          <SportsCard
            key={sport.id}
            imageSrc={sport.imageSrc}
            title={sport.title}
            totalEvents={sport.totalEvents}
            sportType={sport.sportType}
          />
        ))}
        <Advertisement />
      </div>
      <div className="bg-blue-500 w-fit p-3 rounded-md text-white mx-auto mt-11">
        See More
      </div>
    </div>
  );
};

export default UpperComponent1;
