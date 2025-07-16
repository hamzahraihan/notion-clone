import Navigation from "@/components/navigation-bar";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col justify-center items-center max-w-full">
        <section className="flex justify-around items-center max-w-5xl px-8">
          <div className="grid md:grid-cols-2 gap-2">
            <div className="flex flex-col justify-center gap-3">
              <h1 className="lg:text-6xl text-3xl font-semibold lg:text-start text-center">
                Your Ideas. Organized. Effortlessly.
              </h1>
              <p className="">
                One place where teams find every answer, automate the busywork,
                and get projects done.
              </p>
              <div className="flex lg:flex-row flex-col gap-2">
                <Button className="cursor-pointer">Join Waitlist</Button>
                <Button
                  className={`cursor-pointer ${buttonVariants({ variant: "secondary" })}`}
                >
                  Try our demo
                </Button>
              </div>
            </div>
            <div className="flex lg:order-last order-first justify-center items-center">
              <Image
                src="landing-page-icon-1-dark.svg"
                className="dark:hidden block object-cover object-top md:h-full  md:w-96 h-42"
                alt="Landing Page Icon"
                width={400}
                height={400}
              />

              <Image
                src="landing-page-icon-1-white.svg"
                className="dark:block hidden object-cover object-top md:h-full  md:w-96 h-42"
                alt="Landing Page Icon"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        <footer className=" row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </main>
    </>
  );
}
