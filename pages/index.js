import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-16 bg-gray-200 min-h-screen">
      <h1 className="text-center font-bold text-3xl">
        5 Team Sections Using Tailwind & Nextjs
      </h1>
      <div className="container mx-auto mt-14">
        <div className="grid gap-6 w-full px-10 mt-10 md:grid-cols-2 xl:grid-cols-3  ">
          <Link
            className="bg-white shadow  flex flex-col items-center rounded-md  justify-center hover:scale-105 delay-100 ease-in-out"
            href="/team1"
          >
            <img src="/assets/screenshots/team1.png" alt="" className="" />
            <div className="mt-auto mx-auto">
              <h3 className="text-black font-bold">Team 1 Demo</h3>
            </div>
          </Link>
          <Link
            className="bg-white shadow rounded-md flex flex-col items-center  justify-center hover:scale-105 delay-100 ease-in-out"
            href="/team2"
          >
            <img src="/assets/screenshots/team2.png" alt="" className="" />
            <div className="mt-auto mx-auto">
              <h3 className="text-black font-bold">Team 2 Demo</h3>
            </div>
          </Link>
          <Link
            className="bg-white shadow rounded-md flex flex-col items-center  justify-center hover:scale-105 delay-100 ease-in-out"
            href="/team3"
          >
            <img src="/assets/screenshots/team3.png" alt="" className="h-60" />
            <div className="mt-auto mx-auto">
              <h3 className="text-black font-bold">Team 3 Demo</h3>
            </div>
          </Link>
          <Link
            className="bg-white shadow rounded-md flex flex-col items-center  justify-center hover:scale-105 delay-100 ease-in-out"
            href="/team4"
          >
            <img src="/assets/screenshots/team4.png" alt="" className="h-60 " />
            <div className="mt-auto mx-auto">
              <h3 className="text-black font-bold">Team 4 Demo</h3>
            </div>
          </Link>
          <Link
            className="bg-white shadow rounded-md flex flex-col items-center  justify-center hover:scale-105 delay-100 ease-in-out"
            href="/team5"
          >
            <img src="/assets/screenshots/team5.png" alt="" className="" />
            <div className="mt-auto mx-auto">
              <h3 className="text-black font-bold">Team 5 Demo</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
