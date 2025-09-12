"use client";

import ErrorComponent from "../../components/ErrorComponent";

interface InscricaoErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function InscricaoError({ error, reset }: InscricaoErrorProps) {
  console.error("Erro na página de inscrição:", error);

  return (
    <ErrorComponent
      title="Erro no formulário de inscrição"
      message="Ocorreu um erro ao carregar o formulário de inscrição. Tente novamente ou entre em contato conosco se o problema persistir."
      showRetry={true}
      onRetry={reset}
    />
  );
}
