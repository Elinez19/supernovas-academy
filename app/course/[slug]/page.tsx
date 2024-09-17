// SingleCoursePage.tsx
import Sidebar from '@/components/courses/CourseSideBar';
import SingleCourseHero from '@/components/courses/SingleCourseHero';
import courseData from '@/components/courses/CourseData';
import { notFound } from 'next/navigation';
import CourseDetailsTabs from '@/components/courses/CourseDetailsTab';

interface Course {
    instructorDetails: {
      name: string;
      bio: string;
      rating: number;
      reviews: number;
      students: number;
      courses: number;
      image: string;
    };
    curriculum: {
      modules: never[];
    };
    requirements: string;
    whatYouWillLearn: string;
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
    courseIncludes: {
      level: string;
      duration: string;
      lessons: number;
      quizzes: number;
      certifications: string;
      graduation: string;
    };
    reviews?: {
      rating: number;
      comments: {
        user: string;
        text: string;
        date: string;
      }[];
    };
    enrolled?: number;
    lastUpdated?: string;
    tags?: string[];
    securePaymentImg?: string;
  }
  
  

interface Params {
  slug: string;
}

// Fetch course data based on slug
const getCourseBySlug = (slug: string): Course | undefined => {
    return courseData.find((course) => course.slug === slug);
  };
  
  export async function generateStaticParams() {
    return courseData.map((course) => ({
      params: { slug: course.slug },
    }));
  }
  
  const SingleCoursePage = ({ params }: { params: Params }) => {
    const course = getCourseBySlug(params.slug);
  
    if (!course) {
      notFound();
    }
  
    return (
      <div className="relative">
        <SingleCourseHero
          title={course.title}
          subtitle={course.description}
          rating={course.rating}
          reviews={course.reviews?.comments.length || 0}
          enrolled={course.enrolled || 0}
          lastUpdated={course.lastUpdated || 'N/A'}
          tags={course.tags || []}
        />
        <div className="container mx-auto px-6 py-16">
          <div className="flex">
            <div className="flex-1">
              <CourseDetailsTabs
                overview={{
                  description: course.description,
                  whatYouWillLearn: course.whatYouWillLearn || '',
                  requirements: course.requirements || '',
                }}
                curriculum={course.curriculum || { modules: [] }}
                instructorDetails={course.instructorDetails || {
                  name: '',
                  bio: '',
                  rating: 0,
                  reviews: 0,
                  students: 0,
                  courses: 0,
                  image: '',
                }}
                reviews={course.reviews || {
                  rating: 0,
                  comments: []
                }}
              />
            </div>
            <Sidebar
              courseIncludes={course.courseIncludes || {
                level: '',
                duration: '',
                lessons: 0,
                quizzes: 0,
                certifications: '',
                graduation: '',
              }}
              securePaymentImg={course.securePaymentImg || ''}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleCoursePage;