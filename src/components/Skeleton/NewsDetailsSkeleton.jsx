import RightSideBar from "@/components/HomePage/RightSideBar";

const NewsDetailsSkeleton = () => {
  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-360 mx-auto">
        <div className="skeleton h-8 w-48 mb-5"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main Content Skeleton */}
          <div className="border border-gray-100 shadow rounded-lg p-7.5 col-span-3">
            {/* Image Skeleton */}
            <div className="skeleton h-96 w-full mb-5"></div>

            {/* Title Skeleton */}
            <div className="skeleton h-8 w-3/4 mb-4"></div>

            {/* Details Text Skeletons */}
            <div className="space-y-3 mb-8">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-4/5"></div>
            </div>

            {/* Button Skeleton */}
            <div className="skeleton h-10 w-48"></div>
          </div>

          {/* Right Sidebar Skeleton */}
          <div className="space-y-4">
            <div className="skeleton h-8 w-32"></div>
            <div className="space-y-3">
              <div className="skeleton h-20 w-full"></div>
              <div className="skeleton h-20 w-full"></div>
              <div className="skeleton h-20 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsSkeleton;
