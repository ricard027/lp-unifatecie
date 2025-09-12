import Image from "next/image";
import grid from "../app/grid.json";

export default function CoursesSection() {
  return (
    <section className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 sm:gap-6 md:gap-10 gap-6 container m-auto px-6">
      <div className="col-span-1 sm:col-span-2">
        <p className="sm:text-8xl text-4xl font-bold bg-gradient-to-t from-primary-100 via-primary-200 to-primary-300 bg-clip-text text-transparent">
          <span className="sm:text-[300px] text-6xl">C</span>ursos para você
          passar de fase
        </p>
      </div>
      {grid.grid.map((item) => (
        <div
          key={item.id}
          className="border-4 border-primary-200 rounded-4xl flex flex-col items-center justify-between p-6"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={160}
            height={160}
            className="sm:w-40 sm:h-40 w-20 h-20"
          />
          <p className="font-bold sm:text-3xl text-xl text-center mt-6">
            {item.title}
          </p>
          <p className="sm:text-2xl text-lg text-center my-6">
            {item.description}
          </p>
          <p className="sm:text-3xl text-xl font-bold text-primary-200">
            {item.duration}
          </p>
        </div>
      ))}
    </section>
  );
}
