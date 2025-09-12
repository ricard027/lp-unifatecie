import Image from "next/image";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

interface ErrorComponentProps {
  title?: string;
  message?: string;
  statusCode?: number;
  showRetry?: boolean;
  onRetry?: () => void;
}

export default function ErrorComponent({
  title = "Ops! Algo deu errado",
  message = "Ocorreu um erro inesperado. Tente novamente mais tarde.",
  statusCode,
  showRetry = false,
  onRetry,
}: ErrorComponentProps) {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          {statusCode && (
            <div className="text-6xl font-bold text-primary-100 mb-4">
              {statusCode}
            </div>
          )}

          <h1 className="text-2xl font-bold  mb-4">{title}</h1>

          <p className="text-gray-400 mb-8">{message}</p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <button className="w-full bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 hover:from-primary-200 hover:via-primary-300 hover:to-primary-100 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Voltar ao Início
            </button>
          </Link>

          {showRetry && onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Tentar Novamente
            </button>
          )}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            Se o problema persistir, entre em contato conosco através do email{" "}
            <a
              href="mailto:ggbr@fatecie.edu.br"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ggbr@fatecie.edu.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
