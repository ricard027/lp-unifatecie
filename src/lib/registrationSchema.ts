import { z } from "zod";

const validateCPF = (cpf: string): boolean => {
  const cleanCPF = cpf.replace(/\D/g, "");

  if (cleanCPF.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cleanCPF)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.charAt(10))) return false;

  return true;
};

const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, "");
  return cleanPhone.length >= 10 && cleanPhone.length <= 11;
};

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Nome completo deve ter pelo menos 2 caracteres")
    .max(100, "Nome completo deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),

  cpf: z
    .string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(14, "CPF inválido")
    .refine(validateCPF, "CPF inválido"),

  birthDate: z
    .string()
    .min(1, "Data de nascimento é obrigatória")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 >= 15 && age - 1 <= 29;
      }
      return age >= 15 && age <= 29;
    }, "Idade deve estar entre 15 e 29 anos"),

  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),

  phone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .refine(validatePhone, "Telefone inválido"),

  city: z
    .string()
    .min(2, "Cidade deve ter pelo menos 2 caracteres")
    .max(50, "Cidade deve ter no máximo 50 caracteres"),

  state: z
    .string()
    .min(2, "Estado é obrigatório")
    .max(50, "Estado deve ter no máximo 50 caracteres"),

  address: z
    .string()
    .min(5, "Endereço deve ter pelo menos 5 caracteres")
    .max(200, "Endereço deve ter no máximo 200 caracteres"),

  isPublicSchoolStudent: z
    .string()
    .transform((val) => val === "true")
    .refine((value) => typeof value === "boolean", "Selecione uma opção"),
});

export const registrationFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Nome completo deve ter pelo menos 2 caracteres")
    .max(100, "Nome completo deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),

  cpf: z
    .string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(14, "CPF inválido")
    .refine(validateCPF, "CPF inválido"),

  birthDate: z
    .string()
    .min(1, "Data de nascimento é obrigatória")
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data deve estar no formato dd/mm/aaaa")
    .refine((date) => {
      const [day, month, year] = date.split("/").map(Number);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      if (
        birthDate.getDate() !== day ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getFullYear() !== year
      ) {
        return false;
      }

      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age - 1 >= 15 && age - 1 <= 29;
      }
      return age >= 15 && age <= 29;
    }, "Idade deve estar entre 15 e 29 anos"),

  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),

  phone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .refine(validatePhone, "Telefone inválido"),

  city: z
    .string()
    .min(2, "Cidade deve ter pelo menos 2 caracteres")
    .max(50, "Cidade deve ter no máximo 50 caracteres"),

  state: z
    .string()
    .min(2, "Estado é obrigatório")
    .max(50, "Estado deve ter no máximo 50 caracteres"),

  address: z
    .string()
    .min(5, "Endereço deve ter pelo menos 5 caracteres")
    .max(200, "Endereço deve ter no máximo 200 caracteres"),

  isPublicSchoolStudent: z.string().min(1, "Selecione uma opção"),
});

export type RegistrationFormInput = z.infer<typeof registrationFormSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;
