"use client";
import React from "react";
import { SiGooglescholar } from "react-icons/si";

const EducationCard = ({ info }) => {
  const { date, name, college } = info;
  return (
    <main>
      <div className="flex sm:gap-6 gap-3 mt-4 ">
        <SiGooglescholar className="sm:text-4xl text-3xl text-yellow-200"/>
        <div className="pb-10">
            <p className=" font-semibold text-gray-300">{date}</p>
            <h2 className="sm:text-2xl font-semibold">{name}</h2>
            <h2 className="sm:text-l font-semibold text-gray-300">{college}</h2>
        </div>
      </div>
    </main>
  );
};

export default EducationCard;
