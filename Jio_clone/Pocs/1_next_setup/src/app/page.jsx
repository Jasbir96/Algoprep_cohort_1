import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 
    pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        I am home
        <ul  className="flex justify-between w-[80vw] mx-[10vw]">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about/me">ME</Link>
        </ul>
      </main>
    </div>
  );
}
