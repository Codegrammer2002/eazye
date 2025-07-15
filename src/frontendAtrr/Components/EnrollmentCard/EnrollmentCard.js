import React from "react";

const EnrollmentCard = ({ title, code, color, progress }) => {
  return (
    <div className={`rounded-xl p-4 text-white shadow-md`} style={{ backgroundColor: color }}>
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-sm">{code}</p>
      {progress !== "N/A" && (
        <div className="mt-2">
          <div className="w-full bg-white/20 h-2 rounded-full">
            <div className="h-2 bg-white rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm mt-1">{progress}% Completed</p>
        </div>
      )}
    </div>
  );
};

export default EnrollmentCard;
