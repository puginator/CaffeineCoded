import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About me",
  description: `Here are some details about myself and my skills.`,
};

export default function About(){
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have some coffee you want me to try?<br></br> Reach out to me 📞 <Link href="/contact" className="!underline underline-offset-2">here</Link> and send me some coffee.
      </h2>
    </>
  );
}