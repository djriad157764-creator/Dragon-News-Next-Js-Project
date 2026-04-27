import RightSideBar from "@/components/HomePage/RightSideBar";
import { fetchNewsDetailsById } from "@/lib/dataFatch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await fetchNewsDetailsById(id);

  return {
    title: `Dragon News - ${newsDetails.title}`,
    description: newsDetails.details,
  };
};

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await fetchNewsDetailsById(id);
  
  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-360  mx-auto ">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">
          Dragon News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          <div className="border border-gray-100 shadow rounded-lg p-7.5 col-span-3">
            <Image
              className="w-full h-auto mb-5"
              src={newsDetails.image_url}
              width={1000}
              height={1000}
              alt={newsDetails?.title}
            />
            <h3 className="text-2xl leading-11 font-bold text-[#403F3F] mb-2">
              {newsDetails?.title}
            </h3>
            <p className="text-[#706F6F] leading-7 mb-8">
              {newsDetails?.details}
            </p>
            <Link
              href={`/category/${newsDetails?.category_id}`}
              className="bg-[#D72050] btn w-fit hover:bg-[#C11A45] text-white font-bold py-2 px-4 rounded flex items-center gap-2"
            >
              <BsArrowLeft className="text-2xl" /> All news in this category
            </Link>
          </div>

          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
