import React from 'react';

interface OverviewTabProps {
  description: string;
  whatYouWillLearn: { lesson: string }[]; // Updated to accept an array of objects
  requirements: { item: string }[]; // Updated to accept an array of objects
}

const OverviewTab: React.FC<OverviewTabProps> = ({ description, whatYouWillLearn, requirements }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
    <p>{description}</p>

    <h3 className="text-xl font-semibold mt-4">What you'll learn</h3>
    <ul className="list-none space-y-2 pl-0">
      {whatYouWillLearn.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-secondary mr-2.5 mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_980_24852)">
                <path
                  d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                  fill="currentColor"
                />
                <path
                  d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_980_24852">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          {item.lesson} {/* Access the lesson field */}
        </li>
      ))}
    </ul>

    <h3 className="text-xl font-semibold mt-4">Requirements</h3>
    <ul className="list-disc pl-5">
      {requirements.map((req, index) => (
        <li key={index}>{req.item} {/* Access the item field */}</li>
      ))}
    </ul>
  </div>
);

export default OverviewTab;
