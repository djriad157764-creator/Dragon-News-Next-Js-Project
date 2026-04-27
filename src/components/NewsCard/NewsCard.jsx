import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { IoIosStarHalf, IoMdStar } from "react-icons/io";
import { PiBookmarksSimpleThin, PiShareNetworkThin } from "react-icons/pi";

const NewsCard = ({ news }) => {
  const defaultAvatar = "https://via.placeholder.com/50x50?text=No+Image";
  const authorImg = news?.author?.img || defaultAvatar;
  const authorName = news?.author?.name || "Unknown Author";


  return (
    <div className="flex flex-col gap-3 mb-5">
      <div className="border border-gray-100 shadow rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-5 bg-gray-100  rounded-lg ">
          <div className="flex gap-3">
            <div className="">
              <Image
                className="rounded-full"
                src={authorImg}
                alt={authorName}
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <h3>{authorName}</h3> {news?.author?.published_date}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <PiBookmarksSimpleThin className="text-2xl" />
            <PiShareNetworkThin className="text-2xl" />
          </div>
        </div>
        <div
          className="p-5
        "
        >
          <div className="">
            <p className="mb-5">{news?.title}</p>
            <Image
              src={news?.image_url}
              width={1000}
              height={300}
              alt={news?.title}
              className="mb-8"
            />
            <p className="text-gray-600 line-clamp-4">{news?.details}</p>
            <Link
              href={`/news/${news?._id}`}
              className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-semibold"
            >
              Read more
            </Link>
          </div>
          <div className="border-b  border-gray-100 my-5"></div>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="flex gap-1 items-center">
                <IoMdStar className="text-[#FF8C47] text-2xl bg" />
                <IoMdStar className="text-[#FF8C47] text-2xl bg" />
                <IoMdStar className="text-[#FF8C47] text-2xl bg" />
                <IoMdStar className="text-[#FF8C47] text-2xl bg" />
                <IoIosStarHalf className="text-[#FF8C47] text-2xl bg" />
              </div>
              <span>{news?.rating?.number}</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegEye className=" text-[#706F6F] text-xl" />
              <span className="font-medium text-[#706F6F]">
                {news?.total_view}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
