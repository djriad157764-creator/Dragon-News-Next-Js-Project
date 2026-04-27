import RightSideBar from "@/components/HomePage/RightSideBar";

const NewsCategoriesSkeleton = () => {
  // 3টি নিউজ কার্ড স্কেলেটনের জন্য অ্যারে
  const skeletonCards = [1, 2, 3];

  return (
    <div className="mx-5 xl:mx-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-285 mx-auto">
        {/* Left Sidebar Skeleton */}
        <div className="space-y-4">
          <div className="skeleton h-8 w-32 mb-5"></div>
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton h-6 w-full rounded"></div>
            ))}
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="sm:col-span-2">
          <div className="skeleton h-8 w-48 mb-5"></div>

          {/* News Cards Skeletons */}
          <div className="space-y-5">
            {skeletonCards.map((item) => (
              <div
                key={item}
                className="border border-gray-100 shadow rounded-lg overflow-hidden"
              >
                {/* Header Skeleton */}
                <div className="flex justify-between items-center p-5 bg-gray-100">
                  <div className="flex gap-3">
                    <div className="skeleton h-12 w-12 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="skeleton h-4 w-32"></div>
                      <div className="skeleton h-3 w-24"></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="skeleton h-6 w-6 rounded"></div>
                    <div className="skeleton h-6 w-6 rounded"></div>
                  </div>
                </div>

                {/* Body Skeleton */}
                <div className="p-5">
                  <div className="skeleton h-6 w-3/4 mb-5"></div>
                  <div className="skeleton h-64 w-full mb-8 rounded-lg"></div>

                  {/* Text lines */}
                  <div className="space-y-3 mb-8">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-5/6"></div>
                    <div className="skeleton h-4 w-4/5"></div>
                  </div>

                  {/* Read more link */}
                  <div className="skeleton h-5 w-24 mb-5"></div>

                  <div className="border-b border-gray-100 my-5"></div>

                  {/* Footer Skeleton */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="skeleton h-5 w-5 rounded"></div>
                      ))}
                      <div className="skeleton h-5 w-8 ml-2"></div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="skeleton h-5 w-5 rounded"></div>
                      <div className="skeleton h-5 w-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar Skeleton */}
        <div className="space-y-4">
          <div className="skeleton h-8 w-32 mb-5"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="skeleton h-20 w-full rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCategoriesSkeleton;
