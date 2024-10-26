import React from "react";

const Card = ({
  title,
  value,
  subtitle,
  bgColor,
  graph,
  textColor,
  borderColor,
}) => {
  return (
    <div
      className={`p-4 rounded-lg shadow duration-200 hover:shadow-md ${bgColor} ${borderColor} relative transition-all flex justify-between items-center`}
    >
      <div className="flex flex-col space-y-3">
        <h3 className="text-lg font-semibold text-[#161E54] tracking-wide">
          {title}
        </h3>
        <p className="text-4xl font-semibold text-[#161E54]">{value}</p>
        <p className={`text-base font-semibold ${textColor}`}>{subtitle}</p>
      </div>

      {graph && <div className="text-xs text-gray-500 ml-4">{graph}</div>}
    </div>
  );
};

export default Card;
