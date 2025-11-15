import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='/signin'>
        <button className="w-40 h-12 border-2 mt-2 border-black rounded-lg bg-yp-3 text-2xl">Sign in</button>
      </Link>
    </>
  );
}
