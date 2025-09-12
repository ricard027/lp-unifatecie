import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-bl from-[#404b52] via-[#17191B] to-[#17191B] ">
      <section className="flex items-center justify-between pt-40 sm:flex-row flex-col gap-6 min-h-[800px] container m-auto  px-6">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold">
            Formação Digital em{" "}
          </h1>
          <span className="text-white bg-primary-100 rounded-2xl text-4xl sm:text-6xl font-bold px-4 py-1 text-center inline-block mt-4 sm:mt-0">
            e-Sports
          </span>
          <p className="text-primary-100 text-2xl sm:text-4xl font-bold mt-10">
            Geração Gamer Brasil:
          </p>
          <p className="text-lg sm:text-2xl">
            Cursos para os jovens que vão liderar o futuro dos games.
          </p>
          <Link href="/inscricao">
            <button className="text-white rounded-xl bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 hover:from-primary-200 hover:via-primary-300 hover:to-primary-100 py-3 font-semibold cursor-pointer px-6 mt-10 text-lg sm:text-xl transition-all duration-300">
              MATRICULE-SE JÁ!
            </button>
          </Link>
        </div>
        <div className="mt-10 sm:mt-0">
          <Image
            src="/ggbr.png"
            alt="e-sports"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
