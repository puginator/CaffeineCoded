'use client'
import siteMetadata from "@/src/utils/siteMetadata";
import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  PinterestIcon,
  EtsyIcon,
  InstagramIcon,
} from "../Icons";
import Logo from "./Logo";
import Link from "next/link";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import {cx} from "@/src/utils/index";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => setClick(!click);

  return (
    <header className="w-full p-4 sm:px-10 px-5 flex items-center justify-between">
      <Logo />
      <button className="inline-block md:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300 ">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}>
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? "0" : "1",
              }}>
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}>
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      <nav
        className="z-50 w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize flex sm:hidden items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem",
        }}>
        <Link href="/" className="mr-2">
          Home
        </Link>
        {/* <Link href="/about" className="mx-2">
          About
        </Link> */}
        <Link href="/brew-cards" className="mx-2">
          Brew Cards
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav className="z-50 w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/" className="mr-2">
          Home
        </Link>
        {/* <Link href="/about" className="mx-2">
          About
        </Link> */}
        <Link href="/brew-cards" className="mx-2">
          Brew Cards
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="hidden md:flex items-center">
        <a href={siteMetadata.instagram} className="inline-block w-6 h-6 mr-4">
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href={siteMetadata.pinterest} className="inline-block w-6 h-6 mr-4">
          <PinterestIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetadata.etsy} className="inline-block w-6 h-6 mr-4">
          <EtsyIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
}

export default Header;