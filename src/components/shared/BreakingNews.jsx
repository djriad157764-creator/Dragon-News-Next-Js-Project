import { Span } from "next/dist/trace";
import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNewsData = [
  {
    id: 1,
    title: "I can be a React component",
  },
  {
    id: 2,
    title: "Multiple React components working together",
  },
  {
    id: 3,
    title: "Or just some plain text",
  },
];

const BreakingNews = () => {
  return (
    <div className="w-full max-w-285 mx-auto flex gap-5 items-center bg-[#F3F3F3] py-4 pl-4 pr-24 mt-5 rounded-lg mb-12">
      <button className="btn bg-[#D72050] text-xl font-medium text-white ">Latest</button>
      <Marquee pauseOnHover speed={50}>
        <p className="flex gap-10">
          {BreakingNewsData.map((news) => (
            <span
              key={news.id}
              className="text-[#403F3F] text-lg font-semibold"
            >
              {news.title}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
