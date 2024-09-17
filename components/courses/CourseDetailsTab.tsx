"use client";
import React, { useState } from 'react';
import OverviewTab from './CourseOverview';
import CourseContentTab from './CourseContent';
import InstructorTab from './InstructorTab';
import ReviewsTab from './ReviewTab';

interface CourseContent {
  description: string;
  whatYouWillLearn: string;
  requirements: string;
}

interface InstructorDetails {
  name: string;
  bio: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  image: string;
}

interface CourseDetailsTabsProps {
  overview: CourseContent;
  curriculum: {
    modules: Array<{
      title: string;
      lectures: Array<{
        title: string;
        duration: string;
        type: string;
      }>;
    }>;
  };
  instructorDetails: InstructorDetails;
  reviews: {
    rating: number;
    comments: Array<{
      user: string;
      text: string;
      date: string;
    }>;
  };
}

const CourseDetailsTabs: React.FC<CourseDetailsTabsProps> = ({
  overview,
  curriculum,
  instructorDetails,
  reviews,
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-4">
          <button
            onClick={() => handleTabChange('overview')}
            className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Overview
          </button>
          <button
            onClick={() => handleTabChange('content')}
            className={`py-2 px-4 font-medium ${activeTab === 'content' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Course Content
          </button>
          <button
            onClick={() => handleTabChange('instructor')}
            className={`py-2 px-4 font-medium ${activeTab === 'instructor' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Instructor
          </button>
          <button
            onClick={() => handleTabChange('reviews')}
            className={`py-2 px-4 font-medium ${activeTab === 'reviews' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Reviews
          </button>
        </nav>
      </div>
      <div>
        {activeTab === 'overview' && (
          <OverviewTab
            description={overview.description}
            whatYouWillLearn={overview.whatYouWillLearn}
            requirements={overview.requirements}
          />
        )}
        {activeTab === 'content' && (
          <CourseContentTab curriculum={curriculum} />
        )}
        {activeTab === 'instructor' && (
          <InstructorTab instructor={instructorDetails} />
        )}
        {activeTab === 'reviews' && (
          <ReviewsTab reviews={reviews} />
        )}
      </div>
    </div>
  );
};

export default CourseDetailsTabs;
