import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Brew Cards",
  description: `Here are some brew recipes that have never failed me.`,
};

export default function BrewCards() {
  // Fetch brew cards json

  const data = require("@/src/data/cardData.json");
  //console.log(data);
  const cards = data.map((card) => (
    <div
      key={card.name}
      className="w-full md:max-w-[450px] border dark:border-light border-accent  rounded-md px-2 py-2">
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center justify-between w-full mb-4">
          <h1 className="whitespace-nowrap tracking-tight text-lg font-semibold text-accent dark:text-light">
            {card.name}
          </h1>
          <div className="gap-2 flex ">
            <div className="dark:text-light  text-accent inline-flex rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold gap-1  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 ">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                <line x1="6" x2="6" y1="2" y2="4"></line>
                <line x1="10" x2="10" y1="2" y2="4"></line>
                <line x1="14" x2="14" y1="2" y2="4"></line>
              </svg>
              {card.grounds}
            </div>
            <div className="dark:text-light  text-accent inline-flex rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold gap-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 "
                viewBox="0 0 384 512">
                <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
              </svg>
              {card.water}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src={card.image}
            alt={card.name}
            width={200}
            height={200}
            className="aspect-square object-contain mx-auto"
          />
          <div className="flex flex-col items-start justify-center">
            <h2 className="mt-8 font-semibold text-sm  text-accent dark:text-light dark:font-normal">
              Tools:
            </h2>
            <p className="mt-2 font-semibold text-sm  text-accent dark:text-light dark:font-normal">
              {card.recipe}
            </p>
            <h2 className="mt-8 font-semibold text-sm  text-accent dark:text-light dark:font-normal">
              Steps:
            </h2>
            <ul className="mt-2 font-semibold text-sm pl-4  text-accent dark:text-light dark:font-normal list-disc">
              {Object.values(card.instructions).map((instruction, index) => (
                <li key={index} className="mb-1">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-8">{cards}</div>

      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have some coffee you want me to try?<br></br> Reach out to me 📞{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and send me some coffee.
      </h2>
    </>
  );
}
