"use client";

import ErrorComponent from "../components/ErrorComponent";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  console.error("Erro global capturado:", error);

  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#17191B]">
        <ErrorComponent
          title="Erro crítico do sistema"
          message="Ocorreu um erro crítico que afetou toda a aplicação. Nossa equipe foi notificada imediatamente."
          showRetry={true}
          onRetry={reset}
        />
      </body>
    </html>
  );
}
