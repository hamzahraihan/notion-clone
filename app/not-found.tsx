import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center dark:bg-black h-screen dark:text-white">
      <div className="grid grid-cols-2">
        <h2 className="">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
