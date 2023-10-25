import Link from 'next/link'
import Image from 'next/image'
import profileImg from "@/public/robot-logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="md:w-16 w-12 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="Picture of the author"
          className="rounded-full w-full h-auto"
          sizes="33vw"
          priority
        />
      </div>
      <span className="font-bold text-lg md:text-xl dark:font-semibold">
        The Ai Barista
      </span>
    </Link>
  );
}

export default Logo