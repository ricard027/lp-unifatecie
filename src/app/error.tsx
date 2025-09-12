"use client";

import ErrorComponent from "../components/ErrorComponent";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  console.error("Erro capturado:", error);

  return (
    <ErrorComponent
      title="Ops! Algo deu errado"
      message="Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema."
      showRetry={true}
      onRetry={reset}
    />
  );
}
