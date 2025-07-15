import React from "react";
import { useParams } from "react-router-dom";

const mockTeacherData = {
  "Prof. N. Assie-Lumumba": {
    name: "Prof. N. Assie-Lumumba",
    role: "Professor of Africana Studies",
    email: "n.assie-lumumba@cornell.edu",
    expertise: "African Education Systems, Post-Colonial Studies",
    bio: "Prof. Lumumba is a renowned scholar in African diaspora and education, with research spanning decades of Pan-African thought.",
    availableSlots: ["Jan 14 - 10:00 AM", "Jan 16 - 3:00 PM"],
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  "Dr. L. Mboya": {
    name: "Dr. L. Mboya",
    role: "Lecturer in African Studies",
    email: "l.mboya@cornell.edu",
    expertise: "Pan-Africanism, Cultural Anthropology",
    bio: "Dr. Mboya brings vibrant discussions on African identity, diaspora connections, and post-independence development across Africa.",
    availableSlots: ["Jan 14 - 11:00 AM", "Jan 18 - 2:00 PM"],
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
};

const TeacherProfile = () => {
  const { teacherName } = useParams();
  const decodedName = decodeURIComponent(teacherName);
  const teacher = mockTeacherData[decodedName];

  if (!teacher) return <p className="p-6 text-red-500">Teacher not found</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-32 h-32 rounded-full object-cover border"
        />
        <div>
          <h1 className="text-2xl font-bold">{teacher.name}</h1>
          <p className="text-gray-700">{teacher.role}</p>
          <p className="text-sm text-gray-500 mt-2">Email: {teacher.email}</p>
          <p className="mt-4 text-gray-700">
            <strong>Expertise:</strong> {teacher.expertise}
          </p>
          <p className="mt-2 text-gray-600">{teacher.bio}</p>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Available Sessions:</h3>
            <ul className="space-y-1">
              {teacher.availableSlots.map((slot, i) => (
                <li key={i} className="text-sm text-blue-600">
                  {slot}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
