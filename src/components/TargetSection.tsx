import Image from "next/image";
import { FileText } from "lucide-react";

export default function TargetSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 gap-10 items-center pr-6 sm:min-h-[750px] min-h-auto  py-20 relative">
      <div className=" w-full h-full">
        <Image
          src="/bg-games.jpg"
          alt="para-quem"
          width={800}
          height={800}
          className="object-cover rounded-r-[100px] sm:absolute relative top-0 bottom-0 h-full sm:w-1/3 lg:w-[40%] w-full"
        />
      </div>
      <div className="sm:px-0 px-6">
        <h2 className="text-4xl sm:text-6xl font-bold">
          Para quem é a Formação ?
        </h2>
        <p className="text-lg sm:text-2xl my-10 sm:my-20 max-w-2xl">
          Para todos os jovens que querem ingressar no mundo gamer e no
          e-Sports. Não importa se você já joga ou está dando seus primeiros
          passos, o GGBR é a sua chance de evoluir.
        </p>
        <a
          href="/regulamento.pdf"
          download="regulamento-formacao-e-sports.pdf"
          className=" bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 hover:from-primary-200 hover:via-primary-300 hover:to-primary-100 rounded-xl p-4 inline-flex items-center gap-4 text-center hover:bg-primary-200 transition-colors duration-200"
        >
          <FileText size={40} />
          <p className="text-base sm:text-lg text-left line-clamp-2">
            Consulte aqui o regulamento completo da Formação Digital em e-Sports
          </p>
        </a>
      </div>
    </section>
  );
}
