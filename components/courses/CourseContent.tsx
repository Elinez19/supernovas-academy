import { useState } from 'react';

interface Lecture {
  title: string;
  duration: string;
  type: string;
}

interface Module {
  title: string;
  lectures: Lecture[];
}

interface CourseContentTabProps {
  curriculum: {
    modules: Module[];
  };
}

const CourseContentTab: React.FC<CourseContentTabProps> = ({ curriculum }) => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  return (
    <div>
      {curriculum.modules.map((module, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setActiveModule(activeModule === index ? null : index)}
            className="w-full text-left py-2 px-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {module.title} ({module.lectures.length} lectures)
          </button>
          {activeModule === index && (
            <div className="pl-4 mt-2">
              {module.lectures.map((lecture, idx) => (
                <div key={idx} className="py-1">
                  <h4 className="font-medium">{lecture.title}</h4>
                  <p>{lecture.duration}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseContentTab;
