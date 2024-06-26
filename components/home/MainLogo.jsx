import Image from "next/image";
import Link from "next/link";

const MainLogo = () => {
  return (
    <Link href="/" passHref legacyBehavior>
      <a className="flex w-full flex-col flex-wrap px-4 md:items-center">
        <h1 className="flex flex-wrap items-center justify-center pb-2 text-center text-6xl font-bold text-slate-400 dark:text-stone-400 xs:justify-center xs:pb-5 xs:text-8xl md:justify-center">
          Mag
          <div className="relative h-16 w-16 xs:h-24 xs:w-24">
            <Image layout="fill" src="/fire.png" alt="MagLit Logo" priority />
          </div>
          Lit
        </h1>
        <p className="text-center text-sm font-semibold text-slate-400/60 dark:text-stone-400/60 xs:text-base">
          Privacy Respecting Encrypted Link Shortener
        </p>
      </a>
    </Link>
  );
};

export default MainLogo;
