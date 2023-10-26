'use client'
import React from 'react'
import {useForm} from "react-hook-form";
import { EtsyIcon, GithubIcon, LinkedinIcon, TwitterIcon, PinterestIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetadata";

const Footer = () => {
    const {
      register,
      handleSubmit,
      formState: {errors},
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium text-center dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn new coffees you should try. Join other coffee loves
        and stay up to date with latest reviews. © 2023 The Ai Barista. All
        rights reserved. <br></br> Made with ❤ by The Ai Barista
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4">
        <input
          className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 pl-2 sm:pl-0"
          type="email"
          placeholder="Enter your email"
          {...register("email", {required: true})}
        />

        <input
          type="submit"
          className="bg-dark dark:bg-light dark:text-dark text-light cursor-pointer  font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark" />
        </a>
        <a href={siteMetadata.pinterest} className="inline-block w-6 h-6 mr-4 ">
          <PinterestIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetadata.etsy} className="inline-block w-6 h-6 mr-4 ">
          <EtsyIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 The Ai Barista. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://austincodez.dev" className="underline">
            AustinCodez
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer