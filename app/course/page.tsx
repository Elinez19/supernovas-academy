"use client"
import CourseArchiveHero from "@/components/courses/CourseArchiveHero";
import CourseGridCards from "@/components/courses/CourseCards";
import courseData from "@/components/courses/CourseData";
import CourseFilter from "@/components/courses/courseFilter";
import React, { useState } from "react";


const CoursesPage = () => {
  const [filteredCourses, setFilteredCourses] = useState(courseData);

  const handleFilterChange = (filters: any) => {
    // Filtering logic based on the new filters passed from CourseFilter
    let filtered = courseData;
    
    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter(course => course.category === filters.category);
    }
    
    if (filters.rating) {
      filtered = filtered.filter(course => course.rating >= parseFloat(filters.rating));
    }

    // Add more filter conditions based on other filters like price, level, etc.
    
    setFilteredCourses(filtered);
  };

  return (
    <div className=" bg-gradient-to-r from-[#E3F6E9] via-[#F4F1F9] to-[#E3F6E9]">
      <CourseArchiveHero />

      <section className="container mx-auto py-8 ">
        <CourseFilter onFilterChange={handleFilterChange} />
      </section>

      <section className="container mx-auto py-8">
        <CourseGridCards courses={filteredCourses} />
      </section>
    </div>
  );
};

export default CoursesPage;
