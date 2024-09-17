import React, { useState } from "react";
import Image from "next/image";
import { FaChalkboardTeacher, FaClock, FaBookOpen, FaStar, FaCheckCircle } from "react-icons/fa";
import Link from 'next/link';

interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  price: string;
  originalPrice: string;
  discountPrice: string;
  rating: number;
  instructor: string;
  duration: string;
  lessons: number;
  level: string;
  imgSrc: string;
  instructorImg: string;
  isBestSeller?: boolean;
}

interface CourseGridCardsProps {
  courses: Course[];
}

const CourseGridCards: React.FC<CourseGridCardsProps> = ({ courses }) => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link key={course.id} href={`/course/${course.slug}`} passHref>
          <div
            className="relative shadow-courses overflow-hidden rounded-3xl border-8 border-white bg-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setHoveredCourse(course.id)}
            onMouseLeave={() => setHoveredCourse(null)}
          >
            {/* Main card content */}
            <div className="transform transition duration-300 ease-in-out hover:scale-105">
              <div className="p-4">
                <Image
                  src={course.imgSrc}
                  alt={`${course.title} Image`}
                  width={389}
                  height={262}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Course information */}
            <div className="p-6">
              <h4 className="pb-2 text-2xl font-bold text-black">{course.title}</h4>
              <div className="pb-6">
                <p className="pb-2 text-base font-normal opacity-75">{course.description}</p>
              </div>

              {/* Instructor and Price */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center">
                  <FaChalkboardTeacher className="text-indigo-600 mr-2" />
                  {/* <Image
                    src={course.instructorImg}
                    alt={`${course.instructor} Image`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                  <span className="ml-2 font-semibold">{course.instructor}</span>
                </div>
                <div className="text-gray-500 line-through">{course.originalPrice}</div>
              </div>

              {/* Price and Category */}
              <div className="flex items-center justify-between pb-4">
                <span className="block text-lg font-bold text-green-600">{course.discountPrice}</span>
                <span className="block text-gray-500 italic">{course.category}</span>
              </div>

              {/* Lessons, Duration, Level */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <FaBookOpen className="text-indigo-600 mr-2" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-indigo-600 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <span>{course.level}</span>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4">
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Hover content - Show extra details when hovered */}
            {hoveredCourse === course.id && (
              <div className="absolute inset-0 z-10 bg-white p-4 transition-opacity duration-300 ease-in-out border-2 border-gray-100 rounded-xl shadow-lg h-80 flex flex-col justify-between">
                <div>
                  <h4 className="pb-2 text-2xl font-bold text-black">{course.title}</h4>

                  {/* Lessons, Duration, Level with icons */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <FaBookOpen className="text-indigo-600 mr-2" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <span>{course.level}</span>
                  </div>

                  {/* Best Seller Badge */}
                  {course.isBestSeller && (
                    <div className="text-red-500 font-bold uppercase mb-2">Best Seller</div>
                  )}

                  {/* Additional text in unordered list */}
                  <ul className="text-xs text-gray-900 space-y-1">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      Become a UX designer.
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      Become a UI designer.
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      Build & test a full website design.
                    </li>
                  </ul>
                </div>

                {/* Add to Cart Button in Hover Section */}
                <div className="mt-4">
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseGridCards;
