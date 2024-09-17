import React from 'react';

interface InstructorDetails {
  name: string;
  bio: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  image: string;
}

interface InstructorTabProps {
  instructor: InstructorDetails;
}

const InstructorTab: React.FC<InstructorTabProps> = ({ instructor }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-4">Instructor</h3>
      <div className="flex items-center">
        <img src={instructor.image} alt={instructor.name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h4 className="text-lg font-semibold">{instructor.name}</h4>
          <p>{instructor.bio}</p>
          <p>Rating: {instructor.rating}</p>
          <p>Reviews: {instructor.reviews}</p>
          <p>Students: {instructor.students}</p>
          <p>Courses: {instructor.courses}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorTab;
