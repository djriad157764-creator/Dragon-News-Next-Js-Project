import Link from "next/link";


const LeftSideBar = ({ categories, id }) => {
  
  
    return (
      <div className="">
        <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
          All Categories
        </h2>
        <ul>
          {categories?.map((category) => (
            <li
              key={category.category_id}
              className={`text-[#E76F51] text-xl font-medium mb-3 ${id === category.category_id && "bg-[#E76F51] text-white  rounded"}`}
            >
              <Link
                className="px-2 py-1 inline-block w-full"
                href={`/category/${category.category_id}`}
              >
                {category?.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default LeftSideBar;
