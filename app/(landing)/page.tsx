import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-8 ">
      <main className="max-w-5xl">
        <section className="grid lg:grid-cols-3 gap-2 justify-center self-center items-center">
          <div className="flex flex-col gap-3 col-span-2">
            <h1 className="text-5xl font-semibold sm:text-start text-center">
              Your Ideas. Organized. Effortlessly.
            </h1>
            <p className="text-xs">
              One place where teams find every answer, automate the busywork,
              and get projects done.
            </p>
            <div className="flex flex-row gap-2">
              <Button className="cursor-pointer">Join Waitlist</Button>
              <Button
                className={`cursor-pointer ${buttonVariants({ variant: "secondary" })}`}
              >
                Try our demo
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="landing-page-icon-1.svg"
              className=" object-cover h-96 w-96"
              alt="Landing Page Icon"
              width={200}
              height={200}
            />
          </div>
        </section>
      </main>

      <footer className=" row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
