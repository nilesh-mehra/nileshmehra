import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-gray-200 border-slate-800 bg-slate-800 "
    : "text-gray-600 border-slate-600 ";
  return (
    <button
      className={`${buttonStyles} rounded-full w-36 border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
