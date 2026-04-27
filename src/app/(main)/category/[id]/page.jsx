import LeftSideBar from "@/components/HomePage/LeftSideBar";
import RightSideBar from "@/components/HomePage/RightSideBar";
import  NewsCard from "@/components/NewsCard/NewsCard";
import { fetchCategories, fetchCategoriesById } from "@/lib/dataFatch";



const NewsCategoriesPage = async ({ params }) => {
  const { id } = await params;

  const fetchData = await fetchCategories();
  const categories = fetchData?.news_category;
  const categoryNews = await fetchCategoriesById(id);
 
  return (
    <div className="mx-5 xl:mx-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-285 mx-auto ">
        <LeftSideBar categories={categories} id={id} />

        <div className="sm:col-span-2">
          <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
            Dragon News Home
          </h2>
          <div>
            {categoryNews?.length > 0 ?
              categoryNews.map((news) => (
                <NewsCard key={news._id} news={news} />
              ))
            : <p>No news found for this category.</p>}
          </div>
        </div>

        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoriesPage;
