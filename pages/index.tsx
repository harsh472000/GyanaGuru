"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { RootState } from "@/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../GlobalRedux/Features/Counter/counterSlice";
import { useRouter } from "next/router";
import {
  LandingNav,
  HeroSection,
  LandingThreeGrid,
  OurServices,
  WhyChooseUs,
  LandingThreeSecond,
  LandingContact,
  LandingFooter,
} from "../Components/components";
import { useEffect, useState } from "react";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav(prevScrollpos > currentScrollPos);
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(showNav);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Head>
        <title>GyanaGuru</title>

        <meta name="description" content="The Gyana Guru website is an online learning platform that provides access to high-quality educational resources in a wide range of subjects. It offers a vast library of courses, interactive quizzes and exercises, gamification elements, and social features to encourage active participation and collaboration among learners." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="hidden lg:block h-fit gap-y-10 ">
        <div className="fixed w-full transition z-40 ">
          <LandingNav />
          {showNav && <MessageComponnent />}
        </div>
        <HeroSection />
        <LandingThreeGrid />
        <OurServices />
        <WhyChooseUs />
        <div></div>
        <LandingThreeSecond />
        <LandingContact />
        <LandingFooter />
      </main>
      <div className="lg:hidden text-2xl">
        Not For MOBILE SCREENS , Please Check on Laptop or Desktop
      </div>
    </>
  );
}
const MessageComponnent = () => {
  return (
    <div className=" left-0 bg-gray-100 p-4 w-full transition z-40">
      <div className="marquee overflow-hidden">
        <span className="flex flex-row space-x-2 text-black font-archivo text-xl">
          <a className="text-blue-600 " href="https://github.com/PiyushKalyanpy/GyanaGuru" target="_blank">Join us &nbsp;</a>
          in developing our open source project on GitHub by reporting issues,
          submitting bug fixes, or adding new features to the ongoing
          development.
        </span>
      </div>
    </div>
  );
};
