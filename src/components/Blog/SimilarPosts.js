import {sortBlogs, findSimilarBlogs} from "@/src/utils";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { slug } from "github-slugger";


const SimilarPosts = ({blogs, blog}) => {
  const sortedBlogs = sortBlogs(blogs);
  const similarBlogs = findSimilarBlogs(sortedBlogs, blog) 

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10  md:px-25 sxl:px-32  flex flex-col items-center justify-center">
      <div className="flex justify-between w-full">
        <h2 className=" w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Similar Coffees
        </h2>
        <Link
          href={`/categories/${slug(blog.tags[0])}`}
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg hover:font-bold transition-all">
          see more
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows gap-16 mt-16">
        {similarBlogs && similarBlogs.length > 0 && similarBlogs.slice(1, 4).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SimilarPosts;