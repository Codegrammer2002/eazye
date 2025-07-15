import React from "react";
import EnrollmentCard from "../Components/EnrollmentCard/EnrollmentCard";
import UpcomingMeetingCard from "../Components/UpcomingMeetingCard";

const enrollments = [
  { title: "Financial Accounting", code: "AEM 2210", color: "#d72672", progress: "N/A" },
  { title: "Africa: The Continent and Its People", code: "ASRC 2003", color: "#6b7280", progress: "N/A" },
  { title: "Intermediate Bangla-Bengali", code: "BENGL 2201", color: "#0ea5e9", progress: "98.04" },
  { title: "Theory of Statistics", code: "BTRY 4090", color: "#be185d", progress: "N/A" },
  { title: "Methods and Computation", code: "ECON 4140", color: "#8b5cf6", progress: "87.6" },
  { title: "Cayuga Language and Culture", code: "LING 3324", color: "#7c3aed", progress: "96.39" },
  { title: "Causal Inference", code: "STSCI 3900", color: "#dc2626", progress: "97.98" },
];

const meetings = [
  {
    title: "Tom DiCiccio's Office Hours",
    time: "4:15 PM ET",
    date: "Wednesday, December 11, 2024",
    link: "#",
  },
  {
    title: "Final Exam Info Session",
    time: "9:00 AM ET",
    date: "Sunday, December 15, 2024",
    link: "#",
  },
];

const StudentDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Enrollments */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {enrollments.map((course, idx) => (
            <EnrollmentCard key={idx} {...course} />
          ))}
        </div>
      </section>

      {/* Upcoming Meetings */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Meetings</h2>
        <div className="space-y-4">
          {meetings.map((meeting, idx) => (
            <UpcomingMeetingCard key={idx} {...meeting} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default StudentDashboard;
