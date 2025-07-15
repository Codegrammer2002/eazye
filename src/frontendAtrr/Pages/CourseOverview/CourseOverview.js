import React from "react";

const CourseOverview = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ASRC 2003 - Africa: The Continent and Its People
        </h1>
        <p className="text-gray-600 mb-1">Fall 2024</p>
        <p className="text-gray-600 mb-1">
          <strong>Time:</strong> TR 11:40AM–12:55PM &nbsp; | &nbsp;
          <strong>Room:</strong> Uris Hall 262 &nbsp; | &nbsp;
          <strong>Credits:</strong> 3
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong>{" "}
          <a href="mailto:NAssie-Lumumba@cornell.edu" className="text-blue-600 hover:underline">
            NAssie-Lumumba@cornell.edu
          </a>
        </p>
      </div>

      {/* Teacher + Details Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Teacher Card */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-1/3 flex flex-col items-center text-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Prof. Lumumba"
            className="w-28 h-28 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Prof. N. Assie-Lumumba</h2>
          <p className="text-sm text-gray-500 mb-2">Professor of Africana Studies</p>
          <p className="text-gray-600 text-sm mb-4">
            Expertise in African education systems, decolonization, and Pan-African studies. Known for dynamic and student-centered teaching.
          </p>
          <div className="bg-gray-100 p-3 rounded-md w-full mt-auto">
            <p className="text-sm font-medium text-gray-700 mb-1">Available Office Hours:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Tue – Jan 14, 10:00 AM</li>
              <li>Thu – Jan 16, 2:00 PM</li>
            </ul>
            <button className="mt-3 px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded hover:bg-blue-700">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Class Details */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Colonialism and Resistance</h3>
            <p className="text-sm text-gray-600">
              Explore the impact of colonial empires across African nations, resistance movements, and modern consequences.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Pan-African Movements</h3>
            <p className="text-sm text-gray-600">
              Delve into 20th-century Pan-African thought, unity campaigns, diaspora literature, and contemporary activism.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">African Diaspora in the Modern World</h3>
            <p className="text-sm text-gray-600">
              Study cultural identities, migration, globalization, and identity politics shaping African-descended communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
