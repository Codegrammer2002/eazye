import React from "react";
import { Link } from "react-router-dom";

const classes = [
  {
    topic: "Colonialism and Resistance",
    teacher: "Prof. N. Assie-Lumumba",
    time: "TR 11:40AM–12:55PM",
    room: "Uris Hall 262",
    email: "n.assie-lumumba@cornell.edu",
  },
  {
    topic: "Pan-African Movements",
    teacher: "Prof. N. Assie-Lumumba",
    time: "TR 11:40AM–12:55PM",
    room: "Uris Hall 262",
    email: "n.assie-lumumba@cornell.edu",
  },
  {
    topic: "African Diaspora in the Modern World",
    teacher: "Dr. L. Mboya",
    time: "MW 2:00PM–3:15PM",
    room: "Goldwin Smith 132",
    email: "l.mboya@cornell.edu",
  },
];

const CourseDetail = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        ASRC 2003 - Africa: The Continent and Its People
      </h1>
      <p className="text-gray-600 mb-4">Fall 2024 | 3 Credit Hours</p>

      <div className="space-y-6">
        {classes.map((cls, idx) => (
          <div key={idx} className="bg-white p-4 rounded-md shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-1">{cls.topic}</h2>
            <p className="text-sm text-gray-600 mb-1">Time: {cls.time}</p>
            <p className="text-sm text-gray-600 mb-1">Room: {cls.room}</p>
            <p className="text-sm text-gray-600">
              Taught by:{" "}
              <Link
                to={`/teacher/${encodeURIComponent(cls.teacher)}`}
                className="text-blue-600 hover:underline"
              >
                {cls.teacher}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
