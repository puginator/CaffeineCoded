import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const BlogLayoutOne = ({blog}) => {
  return (
    <div className="group inline-block overflow-hidden h-full rounded-xl">
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-dark/90 rounded-xl z-10"></div>
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        sizes="(max-width: 1180) 100vw, 100vw"
        className="cursor-pointer w-full h-full object-center object-cover group-hover:scale-105 rounded-xl transition-all ease duration-300"
      />

      <div className="absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20 w-full">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border "
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span className="bg-gradient-to-r dark:from-accentDark/50 dark:to-accentDark/50 from-accent to-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default BlogLayoutOne