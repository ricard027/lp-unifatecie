import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section className="relative py-20  sm:min-h-[750px] min-h-auto px-6 max-w-7xl m-auto">
      <h2 className="text-4xl sm:text-6xl font-bold text-center">
        Benefícios de entrar nessa{" "}
        <span className="text-primary-200">JORNADA</span>
      </h2>
      <Image
        src="/joistick-left.png"
        alt="joistick-left"
        width={300}
        height={300}
        className="absolute bottom-0 left-0 opacity-30 -translate-x-[-50%]"
      />
      <Image
        src="/bg-joistick.png"
        alt="benefits-1"
        width={800}
        height={800}
        className="absolute top-4 right-0 opacity-30"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 text-lg sm:text-2xl container m-auto gap-10 mt-10 sm:mt-20">
        <p>
          7 cursos rápidos, online e gratuitos em áreas como e-Sports, criação
          de conteúdo e tecnologia aplicada aos games. Conhecimento prático que
          abre caminhos no mercado.
        </p>
        <p>
          Cada formação garante certificado digital reconhecido de 30 horas,
          além de suporte pedagógico para evoluir em cada fase da jornada gamer.
        </p>
        <p>
          É 100% online, gratuito e pensado para jovens de todo o Brasil. Um
          espaço inclusivo, que valoriza a diversidade e garante que todos
          possam jogar essa partida rumo ao futuro.
        </p>
      </div>
    </section>
  );
}
