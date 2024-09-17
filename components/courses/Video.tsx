import React, { useState } from "react";

const Video = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12">
            <div className="relative z-20 overflow-hidden rounded-lg md:h-[300px] md:w-[500px]">
              {!videoOpen ? (
                // Thumbnail before video opens
                <div className="relative h-[300px] w-[500px]">
                  <img
                    src="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
                    alt="Video Thumbnail"
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 23 27"
                      className="fill-current"
                    >
                      <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                    </svg>
                  </button>
                </div>
              ) : (
                // Video when opened
                <div className="h-[300px] w-[500px]">
                  <iframe
                    title="YouTube Video"
                    className="h-full w-full rounded-lg"
                    src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&controls=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute right-0 top-0 mt-4 mr-4 bg-red-600 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default Video;
