import Image from 'next/image';
import checkIcon from '@/assets/check.svg';  // adjust the path based on your file structure
import searchIcon from '@/assets/search.svg';
import checkCircleIcon from '@/assets/check-circle.svg';
import mahilaImage from '@/assets/mahila.png';

export const menuItems = [
  {
    label: 'Courses',
    subMenu: [
      {
        title: 'Popular Courses',
        links: [
          { name: 'Web Development', url: '/courses/web-development' },
          { name: 'Data Science', url: '/courses/data-science' },
          { name: 'Mobile App Development', url: '/courses/mobile-app-development' },
          { name: 'Cybersecurity', url: '/courses/cybersecurity' },
          { name: 'Machine Learning', url: '/courses/machine-learning' },
        ],
        imageSrc: mahilaImage,
      },
      {
        title: 'New Courses',
        links: [
          { name: 'Cloud Computing', url: '/courses/cloud-computing' },
          { name: 'AI and Robotics', url: '/courses/ai-robotics' },
          { name: 'UI/UX Design', url: '/courses/ui-ux-design' },
          { name: 'Blockchain', url: '/courses/blockchain' },
          { name: 'Digital Marketing', url: '/courses/digital-marketing' },
        ],
        imageSrc: mahilaImage,
      },
    ],
  },
  {
    label: 'Resources',
    subMenu: [
      {
        title: 'Learning Materials',
        links: [
          { name: 'Ebooks', url: '/resources/ebooks' },
          { name: 'Video Tutorials', url: '/resources/video-tutorials' },
          { name: 'Coding Challenges', url: '/resources/coding-challenges' },
          { name: 'Projects', url: '/resources/projects' },
          { name: 'Certificates', url: '/resources/certificates' },
        ],
        imageSrc: mahilaImage,
      },
      {
        title: 'Community',
        links: [
          { name: 'Discussion Forums', url: '/resources/discussion-forums' },
          { name: 'Study Groups', url: '/resources/study-groups' },
          { name: 'Events & Webinars', url: '/resources/events-webinars' },
          { name: 'Alumni Network', url: '/resources/alumni-network' },
        ],
        imageSrc: mahilaImage,
      },
    ],
  },
  { label: 'About Us', url: '/about' },
  { label: 'Features', url: '/features' },
];
