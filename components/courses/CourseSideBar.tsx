"use client";
import { useState, useEffect } from "react";
import image1 from "@/assets/image (4).jpg";
import {
  FaPlay,
  FaCheckCircle,
  FaDollarSign,
  FaGraduationCap,
  FaBook,
  FaClock,
  FaShieldAlt,
  FaShareAlt,
  FaShoppingCart,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Video from "./Video";
import Image from "next/image";

interface SidebarProps {
  courseIncludes: {
    level: string;
    duration: string;
    lessons: number;
    quizzes: number;
    certifications: string;
    graduation: string;
  };
  securePaymentImg: string;
  courseFee?: {
    currentPrice?: string;
    oldPrice?: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({
  courseIncludes,
  securePaymentImg,
  courseFee = { currentPrice: "0.00", oldPrice: "0.00" },
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    console.log("Course Includes:", courseIncludes); // Log the courseIncludes prop to ensure it's being passed
  }, [courseIncludes]);

  // Social media share URLs (use your own URL here)
  const shareUrl = "https://your-course-url.com";

  const socialMediaShare = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=Check%20out%20this%20course!`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=Check%20out%20this%20course:%20${shareUrl}`,
  };

  return (
    <div className="fixed top-60 right-4 w-80 bg-white shadow-lg rounded-lg p-4 overflow-y-auto max-h-screen z-50">
      {/* Video Section */}
      <div className="relative mb-6">
        {!isVideoOpen && (
          <button
            onClick={() => setIsVideoOpen(true)}
            className="absolute top-10 right-10 mt-2 mr-2 p-2 bg-blue-950 text-white rounded-full"
          >
            <FaPlay size={24} />
          </button>
        )}

        {isVideoOpen ? (
          <div className="relative">
            <Video />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        ) : (
          <Image
            src={image1}
            alt="Video Thumbnail"
            className="h-40 w-full rounded-lg object-cover"
            width={400}
            height={200}
          />
        )}
      </div>

      {/* Course Fee Section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold">This Course Fee:</h4>
        <div className="text-gray-800">
          <span className="text-xl font-bold text-red-600">${courseFee.currentPrice}</span>
          <span className="line-through ml-2 text-gray-500">${courseFee.oldPrice}</span>
        </div>
      </div>

      {/* Course Includes Section */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Course Includes:</h4>
        <ul className="list-none text-sm text-gray-600 mt-2">
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>Level: {courseIncludes.level}</span>
          </li>
          <li className="flex items-center mb-2">
            <FaClock className="text-blue-600 mr-2" />
            <span>Duration: {courseIncludes.duration}</span>
          </li>
          <li className="flex items-center mb-2">
            <FaBook className="text-orange-600 mr-2" />
            <span>Lessons: {courseIncludes.lessons}</span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>Quizzes: {courseIncludes.quizzes}</span>
          </li>
          <li className="flex items-center mb-2">
            <FaGraduationCap className="text-purple-600 mr-2" />
            <span>Certifications: {courseIncludes.certifications}</span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>Graduation: {courseIncludes.graduation}</span>
          </li>
        </ul>
      </div>

      {/* Secure Payment Section */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Secure Payment:</h4>
        <img src={securePaymentImg} alt="Secure Payment" className="w-full h-auto mt-2" />
      </div>

      {/* Share Section */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Share this course:</h4>
        <div className="flex items-center mt-2 space-x-4">
          <a href={socialMediaShare.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600" size={24} />
          </a>
          <a href={socialMediaShare.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400" size={24} />
          </a>
          <a href={socialMediaShare.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-800" size={24} />
          </a>
          <a href={socialMediaShare.whatsapp} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500" size={24} />
          </a>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-6">
        <button
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
          onClick={() => alert("Added to Cart")}
        >
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
