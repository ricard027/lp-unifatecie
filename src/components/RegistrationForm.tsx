"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationFormSchema,
  RegistrationFormInput,
  RegistrationFormData,
} from "../lib/registrationSchema";
import { useState } from "react";
import { Input, RadioGroup } from "./ui";

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormInput>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      isPublicSchoolStudent: "",
    },
  });

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  };

  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 4) {
      return numbers.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    } else {
      return numbers.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    }
  };

  const onSubmit = async (data: RegistrationFormInput) => {
    const [day, month, year] = data.birthDate.split("/").map(Number);
    const isoDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    const formData: RegistrationFormData = {
      ...data,
      birthDate: isoDate,
      isPublicSchoolStudent: data.isPublicSchoolStudent === "true",
    };
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      console.log("Dados do formulário:", formData);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitMessage({
        type: "success",
        text: "Inscrição realizada com sucesso! Você receberá um email de confirmação em breve.",
      });

      reset();
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Erro ao realizar inscrição. Tente novamente ou entre em contato conosco.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 rounded-lg shadow-lg">
      {submitMessage && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitMessage.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6"
      >
        <Input
          id="fullName"
          label="Nome Completo"
          placeholder="Nome completo:"
          isRequired
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="cpf"
            label="CPF"
            placeholder="CPF:"
            maxLength={14}
            isRequired
            error={errors.cpf?.message}
            {...register("cpf")}
            onChange={(e) => {
              const formatted = formatCPF(e.target.value);
              e.target.value = formatted;
            }}
          />

          <Input
            id="birthDate"
            label="Data de Nascimento"
            placeholder="Data de nascimento:"
            maxLength={10}
            isRequired
            error={errors.birthDate?.message}
            {...register("birthDate")}
            onChange={(e) => {
              const formatted = formatDate(e.target.value);
              e.target.value = formatted;
            }}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Seu email:"
            isRequired
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            id="phone"
            label="Celular:"
            type="tel"
            placeholder="Celular:"
            isRequired
            error={errors.phone?.message}
            {...register("phone")}
            onChange={(e) => {
              const formatted = formatPhone(e.target.value);
              e.target.value = formatted;
            }}
          />

          <Input
            id="city"
            label="Cidade"
            placeholder="Cidade:"
            isRequired
            error={errors.city?.message}
            {...register("city")}
          />

          <Input
            id="state"
            label="Estado"
            placeholder="Estado:"
            isRequired
            error={errors.state?.message}
            {...register("state")}
          />
        </div>
        <Input
          id="address"
          label="Endereço"
          placeholder="Endereço:"
          isRequired
          error={errors.address?.message}
          {...register("address")}
        />
        <Controller
          name="isPublicSchoolStudent"
          control={control}
          render={({ field }) => (
            <RadioGroup
              label="É estudante ou já se formou na rede pública de ensino?"
              isRequired
              error={errors.isPublicSchoolStudent?.message}
              options={[
                { value: "true", label: "Sim" },
                { value: "false", label: "Não" },
              ]}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 hover:from-primary-200 hover:via-primary-300 hover:to-primary-100 text-white py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSubmitting ? "Enviando..." : "Realizar Inscrição"}
          </button>
        </div>
      </form>
    </div>
  );
}
