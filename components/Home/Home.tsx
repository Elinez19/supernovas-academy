// import Image from 'next/image';
// import checkIcon from '@/assets/check.svg';  // adjust the path based on your file structure
// import mahilaImage from '@/assets/supernovas-hero.png';
// import Link from 'next/link';

// const Home = () => {
//     return (
//         <div id="home-section" className='bg-lightkblue'>
//             <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
//                 <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
//                     <div className='col-span-6 flex flex-col justify-evenly'>
//                         <div className='flex gap-2 mx-auto lg:mx-0'>
//                             <Image src={checkIcon} alt="check-image" width={20} height={20} />
//                             <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Get 30% off on first enroll</h3>
//                         </div>
//                         <h1 className='text-blue-950 text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Advance your engineering skills with us.</h1>
//                         <h3 className='text-gray-600 text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Acquire the essential skills for your next advancement and every subsequent stride. Enroll in courses starting free.</h3>
                        
//                         {/* CTA Buttons */}
//                         <div className='flex justify-center lg:justify-start gap-4 pt-10 lg:pt-5'>
//                         <div className="hidden lg:flex items-center space-x-4">
//                         <Link href="/signup" className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-200">Enroll now</Link>
//                         <Link href="/login" className="text-base font-medium dark:text-white hover:text-primary transition-all duration-200">Get Started</Link>
//                         </div>
//                         </div>
//                     </div>

//                     <div className='col-span-6 flex justify-center'>
//                         <Image src={mahilaImage} alt="nothing" width={1000} height={805} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;

// components/Hero.tsx

import Image from 'next/image';
import bgImage from '@/assets/bg-img.png';  // Replace with your background image path
import heroImage from '@/assets/mahila.png';  // Replace with your hero image path

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-blue-950 opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Content Section */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Advance your engineering skills with us.
            </h1>
            <p className="text-lg">
              Build skills with our courses and mentorship from world-class companies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-950 px-6 py-3 rounded-lg text-lg hover:bg-blue-900 transition duration-150">
                Get Started
              </button>
              <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white transition duration-150">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <Image src={heroImage} alt="Hero Image" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
