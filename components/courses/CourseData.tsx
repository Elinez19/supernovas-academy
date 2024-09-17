import courseImg1 from "@/assets/coursesOne1.svg";
import courseImg2 from "@/assets/coursesFour44.svg";
import courseImg3 from "@/assets/coursesThree3.svg";
import courseImg4 from "@/assets/coursesTwo2.svg";

const courseData = [
  {
    id: 1,
    slug: "introduction-to-art",
    title: "Introduction to Art",
    description: "Learn the basics of art and drawing.",
    category: "Art",
    price: "$79",
    originalPrice: "$199",
    discountPrice: "$79",
    rating: 4.7,
    instructor: "Jane Cooper",
    duration: "22h 0m",
    lessons: 6,
    level: "Beginner",
    imgSrc: courseImg1,
    instructorImg: "/images/jane-cooper.jpg",
    courseIncludes: {
      level: "Beginner",
      duration: "22h 0m",
      lessons: 6,
      quizzes: 10,
      certifications: "Yes",
      graduation: "30K",
    },
    curriculum: {
      modules: [
        {
          title: "Module 1: Basics",
          lectures: [
            { title: "Introduction to Art", duration: "30m", type: "lecture" },
            { title: "Drawing Techniques", duration: "45m", type: "lecture" },
          ],
        },
        {
          title: "Module 2: Advanced Techniques",
          lectures: [
            { title: "Color Theory", duration: "1h", type: "lecture" },
            { title: "Shading and Textures", duration: "1h 30m", type: "lecture" },
          ],
        },
      ],
    },
    requirements: [
      { item: "Basic drawing materials." },
      { item: "Pencil, eraser, sketchbook." },
    ],
    whatYouWillLearn: [
      { lesson: "Techniques for drawing and understanding art principles." },
      { lesson: "Color theory and shading." },
    ],
    instructorDetails: {
      name: "Jane Cooper",
      bio: "Jane is a professional artist with over 10 years of experience.",
      rating: 4.7,
      reviews: 150,
      students: 2000,
      courses: 5,
      image: "/images/jane-cooper.jpg",
    },
  },
  {
    id: 2,
    slug: "animation-for-beginners",
    title: "Animation for Beginners",
    description: "Start your journey in animation with this beginner-friendly course.",
    category: "Animation",
    price: "$79",
    originalPrice: "$199",
    discountPrice: "$79",
    rating: 4.5,
    instructor: "Jenny Wilson",
    duration: "7 hours",
    lessons: 8,
    level: "Beginner",
    imgSrc: courseImg2,
    instructorImg: "/images/jenny-wilson.jpg",
    courseIncludes: {
      level: "Beginner",
      duration: "7 hours",
      lessons: 8,
      quizzes: 5,
      certifications: "Yes",
      graduation: "15K",
    },
    curriculum: {
      modules: [
        {
          title: "Module 1: Introduction to Animation",
          lectures: [
            { title: "Basics of Animation", duration: "1h", type: "lecture" },
            { title: "Tools and Software", duration: "1h 30m", type: "lecture" },
          ],
        },
        {
          title: "Module 2: Creating Animations",
          lectures: [
            { title: "Creating Basic Animations", duration: "2h", type: "lecture" },
            { title: "Advanced Techniques", duration: "2h", type: "lecture" },
          ],
        },
      ],
    },
    requirements: [
      { item: "Basic knowledge of graphic design." },
      { item: "Access to animation software." },
    ],
    whatYouWillLearn: [
      { lesson: "Fundamentals of animation and creating your own animations." },
      { lesson: "Using animation tools effectively." },
    ],
    instructorDetails: {
      name: "Jenny Wilson",
      bio: "Jenny is a seasoned animator with extensive experience in the industry.",
      rating: 4.5,
      reviews: 120,
      students: 1800,
      courses: 4,
      image: "/images/jenny-wilson.jpg",
    },
  },
  {
    id: 3,
    slug: "mastering-photography",
    title: "Mastering Photography",
    description: "Enhance your photography skills and master the art of capturing moments.",
    category: "Photography",
    price: "$99",
    originalPrice: "$299",
    discountPrice: "$99",
    rating: 4.9,
    instructor: "Robert Fox",
    duration: "20+ hours",
    lessons: 12,
    level: "Intermediate",
    imgSrc: courseImg3,
    instructorImg: "/images/robert-fox.jpg",
    courseIncludes: {
      level: "Intermediate",
      duration: "20+ hours",
      lessons: 12,
      quizzes: 12,
      certifications: "Yes",
      graduation: "50K",
    },
    curriculum: {
      modules: [
        {
          title: "Module 1: Fundamentals of Photography",
          lectures: [
            { title: "Camera Basics", duration: "1h", type: "lecture" },
            { title: "Lighting Techniques", duration: "1h 30m", type: "lecture" },
          ],
        },
        {
          title: "Module 2: Advanced Photography",
          lectures: [
            { title: "Editing Techniques", duration: "2h", type: "lecture" },
            { title: "Creative Photography", duration: "2h 30m", type: "lecture" },
          ],
        },
      ],
    },
    requirements: [
      { item: "Basic understanding of photography equipment." },
      { item: "Access to a digital camera." },
    ],
    whatYouWillLearn: [
      { lesson: "Advanced photography techniques and editing skills." },
      { lesson: "Mastering lighting and composition." },
      { lesson: "Advanced photography techniques and editing skills." },
      { lesson: "Mastering lighting and composition." },
    ],
    instructorDetails: {
      name: "Robert Fox",
      bio: "Robert is a professional photographer with over 15 years of experience.",
      rating: 4.9,
      reviews: 200,
      students: 3000,
      courses: 8,
      image: "/images/robert-fox.jpg",
    },
  },
];

export default courseData;

