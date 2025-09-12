import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[#141516] mt-10 px-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-8 items-center ">
          <div className="flex flex-col gap-2 relative h-[200px]">
            <Image
              src="/gov-brasil.png"
              alt="Governo do Brasil"
              width={200}
              height={200}
              className="object-cover w-full h-1/2"
            />
            <Image
              src="/unifatecie-logo.png"
              alt="Unifatecie"
              width={150}
              height={75}
              className="object-contain w-full h-1/2"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold">Institucional</h3>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Termos e Condições
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold">Contatos</h3>
            <div className="flex flex-col gap-2">
              <p className="text-gray-300">
                <span className="font-semibold">Telefone:</span> +55 (44) 3045 -
                9898
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">E-mail:</span>{" "}
                ggbr@fatecie.edu.br
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/ggbr-small.png"
              alt="Geração Gamer Brasil"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
