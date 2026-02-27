"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Technologies",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Coffee",
    value: "999",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="pt-12 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#eeeded] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-gray-600 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#757779] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
