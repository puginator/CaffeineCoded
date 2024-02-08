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
    <div key={card.name} className="w-full md:max-w-[450px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-8 font-semibold text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
            {card.name}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image src={card.image} alt={card.name} width={200} height={200} className="aspect-square object-contain" />
            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-8 font-semibold text-lg self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
                {card.description}
              </h2>
              <h2 className="mt-8 font-semibold text-lg self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
                {card.recipe}
              </h2>
              <h2 className="mt-8 font-semibold text-lg self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
                {Object.values(card.instructions).map((instruction, index) => (
                  <p key={index}>{instruction}</p>
                ))}
              </h2>
            </div>
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
