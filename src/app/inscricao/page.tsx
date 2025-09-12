import Image from "next/image";
import RegistrationForm from "../../components/RegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscrição - Geração Gamer Brasil",
  description:
    "Inscreva-se na Geração Gamer Brasil e faça parte da formação digital em e-Sports",
  keywords:
    "inscrição, cadastro, geração gamer brasil, e-sports, cursos gratuitos",
};

export default function InscricaoPage() {
  return (
    <main className="py-8  sm:my-40 my-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold  mb-4">Formulário de Inscrição</h1>
        </div>

        <div className="relative">
          <RegistrationForm />
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
        </div>
      </div>
    </main>
  );
}
