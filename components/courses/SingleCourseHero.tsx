interface SingleCourseHeroProps {
    title: string;
    subtitle: string;
    rating: number;
    reviews: number;
    enrolled: number;
    lastUpdated: string;
    tags: string[];
  }
  
  const SingleCourseHero: React.FC<SingleCourseHeroProps> = ({ title, subtitle, rating, reviews, enrolled, lastUpdated, tags }) => {
    return (
      <div className="bg-gradient-to-r from-[#E3F6E9] via-[#F8E3C7] to-[#DCDFF9] p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg mb-4">{subtitle}</p>
        <div className="flex gap-4 mb-4">
          <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">{rating}</span>
          <span className="text-sm">{reviews} reviews</span>
          <span className="text-sm">{enrolled} enrolled</span>
          <span className="text-sm">Last updated: {lastUpdated}</span>
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-indigo text-white px-2 py-1 rounded-full text-xs font-semibold">{tag}</span>
          ))}
        </div>
      </div>
    );
  };
  
  export default SingleCourseHero;
  