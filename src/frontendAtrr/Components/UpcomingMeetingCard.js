import React from "react";

const UpcomingMeetingCard = ({ title, time, date, link }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{date} at {time}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        Join Meeting
      </a>
    </div>
  );
};

export default UpcomingMeetingCard;
