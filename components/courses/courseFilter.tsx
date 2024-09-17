import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: {
    category: string;
    rating: string;
    instructor: string;
    price: string;
    level: string;
    language: string;
    duration: string;
  }) => void;
}

const CourseFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [selectedInstructor, setSelectedInstructor] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      rating: selectedRating,
      instructor: selectedInstructor,
      price: selectedPrice,
      level: selectedLevel,
      language: selectedLanguage,
      duration: selectedDuration,
    });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center py-4  bg-gradient-to-r from-[#E3F6E9] via-[#F4F1F9] to-[#E3F6E9] px-4">
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="All">All Categories</option>
        <option value="Art">Art</option>
        <option value="Animation">Animation</option>
        <option value="Design">Design</option>
        <option value="Photography">Photography</option>
        <option value="Programming">Programming</option>
        <option value="Writing">Writing</option>
      </select>

      {/* Rating Filter */}
      <select
        value={selectedRating}
        onChange={(e) => setSelectedRating(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="All">All Ratings</option>
        <option value="4.5 & up">4.5 & up</option>
        <option value="4.0 & up">4.0 & up</option>
        <option value="3.5 & up">3.5 & up</option>
        <option value="3.0 & up">3.0 & up</option>
      </select>

      {/* Instructors Filter */}
      <select
        value={selectedInstructor}
        onChange={(e) => setSelectedInstructor(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="All">All Instructors</option>
        <option value="Jane Cooper">Jane Cooper</option>
        <option value="Jenny Wilson">Jenny Wilson</option>
        <option value="Robert Fox">Robert Fox</option>
        <option value="Jacob Jones">Jacob Jones</option>
        <option value="Albert Flores">Albert Flores</option>
      </select>

      {/* Price Filter */}
      <select
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="All">All Prices</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>

      {/* Level Filter */}
      <select
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="All">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>

      {/* Language Filter */}
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="All">All Languages</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Italian">Italian</option>
      </select>

      {/* Duration Filter */}
      <select
        value={selectedDuration}
        onChange={(e) => setSelectedDuration(e.target.value)}
        className="border px-4 py-2 rounded-md"
      >
        <option value="All">All Durations</option>
        <option value="Less than 4 hours">Less than 4 hours</option>
        <option value="4 - 7 hours">4 - 7 hours</option>
        <option value="7 - 18 hours">7 - 18 hours</option>
        <option value="20+ hours">20+ hours</option>
      </select>

      <button
        onClick={handleFilterChange}
        className="bg-indigo text-white px-6 py-2 rounded-md hover:bg-indigo-500"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default CourseFilter;
