import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistrationForm from "../RegistrationForm";

describe("RegistrationForm Component", () => {
  const user = userEvent.setup();

  describe("Form Rendering", () => {
    it("should render all form fields", () => {
      render(<RegistrationForm />);

      expect(screen.getByPlaceholderText("Nome completo:")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("CPF:")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Data de nascimento:")
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Seu email:")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Celular:")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Cidade:")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Estado:")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Endereço:")).toBeInTheDocument();
      expect(
        screen.getByText(
          "É estudante ou já se formou na rede pública de ensino?"
        )
      ).toBeInTheDocument();
    });

    it("should render submit button", () => {
      render(<RegistrationForm />);

      const submitButton = screen.getByRole("button", {
        name: /realizar inscrição/i,
      });
      expect(submitButton).toBeInTheDocument();
    });

    it("should render radio options", () => {
      render(<RegistrationForm />);

      expect(screen.getByLabelText("Sim")).toBeInTheDocument();
      expect(screen.getByLabelText("Não")).toBeInTheDocument();
    });
  });

  describe("Form Validation", () => {
    it("should show validation errors for empty required fields", async () => {
      render(<RegistrationForm />);

      const submitButton = screen.getByRole("button", {
        name: /realizar inscrição/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText("Nome completo deve ter pelo menos 2 caracteres")
        ).toBeInTheDocument();
        expect(screen.getByText("CPF deve ter 11 dígitos")).toBeInTheDocument();
        expect(
          screen.getByText("Data de nascimento é obrigatória")
        ).toBeInTheDocument();
        expect(screen.getByText("Email é obrigatório")).toBeInTheDocument();
        expect(
          screen.getByText("Telefone deve ter pelo menos 10 dígitos")
        ).toBeInTheDocument();
        expect(
          screen.getByText("Cidade deve ter pelo menos 2 caracteres")
        ).toBeInTheDocument();
        expect(screen.getByText("Estado é obrigatório")).toBeInTheDocument();
        expect(
          screen.getByText("Endereço deve ter pelo menos 5 caracteres")
        ).toBeInTheDocument();
        expect(screen.getByText("Selecione uma opção")).toBeInTheDocument();
      });
    });

    it("should validate name format", async () => {
      render(<RegistrationForm />);

      const nameInput = screen.getByPlaceholderText("Nome completo:");
      await user.type(nameInput, "João123");

      const submitButton = screen.getByRole("button", {
        name: /realizar inscrição/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText("Nome deve conter apenas letras e espaços")
        ).toBeInTheDocument();
      });
    });

    it("should validate CPF format", async () => {
      render(<RegistrationForm />);

      const cpfInput = screen.getByPlaceholderText("CPF:");
      await user.type(cpfInput, "12345678901");

      const submitButton = screen.getByRole("button", {
        name: /realizar inscrição/i,
      });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText("CPF inválido")).toBeInTheDocument();
      });
    });
  });

  describe("Form Input Formatting", () => {
    it("should format CPF input", async () => {
      render(<RegistrationForm />);

      const cpfInput = screen.getByPlaceholderText("CPF:");
      await user.type(cpfInput, "12345678901");

      expect(cpfInput).toHaveValue("123.456.789-01");
    });

    it("should format phone input", async () => {
      render(<RegistrationForm />);

      const phoneInput = screen.getByPlaceholderText("Celular:");
      await user.type(phoneInput, "11999999999");

      expect(phoneInput).toHaveValue("(11) 99999-9999");
    });

    it("should format date input", async () => {
      render(<RegistrationForm />);

      const dateInput = screen.getByPlaceholderText("Data de nascimento:");
      await user.type(dateInput, "01012000");

      expect(dateInput).toHaveValue("01/01/2000");
    });
  });

  describe("Form Submission", () => {
    const validFormData = {
      fullName: "João Silva Santos",
      cpf: "11144477735",
      birthDate: "01/01/2000",
      email: "joao.silva@example.com",
      phone: "11999999999",
      city: "São Paulo",
      state: "SP",
      address: "Rua das Flores, 123",
      isPublicSchoolStudent: "true",
    };

    const fillForm = async (formData: Partial<typeof validFormData>) => {
      if (formData.fullName) {
        await user.type(
          screen.getByPlaceholderText("Nome completo:"),
          formData.fullName
        );
      }
      if (formData.cpf) {
        await user.type(screen.getByPlaceholderText("CPF:"), formData.cpf);
      }
      if (formData.birthDate) {
        await user.type(
          screen.getByPlaceholderText("Data de nascimento:"),
          formData.birthDate
        );
      }
      if (formData.email) {
        await user.type(
          screen.getByPlaceholderText("Seu email:"),
          formData.email
        );
      }
      if (formData.phone) {
        await user.type(
          screen.getByPlaceholderText("Celular:"),
          formData.phone
        );
      }
      if (formData.city) {
        await user.type(screen.getByPlaceholderText("Cidade:"), formData.city);
      }
      if (formData.state) {
        await user.type(screen.getByPlaceholderText("Estado:"), formData.state);
      }
      if (formData.address) {
        await user.type(
          screen.getByPlaceholderText("Endereço:"),
          formData.address
        );
      }
      if (formData.isPublicSchoolStudent) {
        await user.click(
          screen.getByLabelText(
            formData.isPublicSchoolStudent === "true" ? "Sim" : "Não"
          )
        );
      }
    };

    it("should submit form with valid data", async () => {
      render(<RegistrationForm />);

      await fillForm(validFormData);

      const submitButton = screen.getByRole("button", {
        name: /realizar inscrição/i,
      });
      await user.click(submitButton);

      // Aguarda a mensagem de sucesso aparecer
      await waitFor(
        () => {
          expect(
            screen.getByText(
              "Inscrição realizada com sucesso! Você receberá um email de confirmação em breve."
            )
          ).toBeInTheDocument();
        },
        { timeout: 5000 }
      );
    });

    it("should show loading state during submission", async () => {
      render(<RegistrationForm />);

      await fillForm(validFormData);

      const submitButton = screen.getByRole("button", {
        name: /realizar inscrição/i,
      });
      await user.click(submitButton);

      // Verifica se o botão está desabilitado durante o envio
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveTextContent("Enviando...");
    });

    it("should reset form after successful submission", async () => {
      render(<RegistrationForm />);

      await fillForm(validFormData);

      const submitButton = screen.getByRole("button", {
        name: /realizar inscrição/i,
      });
      await user.click(submitButton);

      // Aguarda a mensagem de sucesso
      await waitFor(
        () => {
          expect(
            screen.getByText(
              "Inscrição realizada com sucesso! Você receberá um email de confirmação em breve."
            )
          ).toBeInTheDocument();
        },
        { timeout: 10000 }
      );

      // Verifica se os campos foram resetados
      await waitFor(
        () => {
          expect(screen.getByPlaceholderText("Nome completo:")).toHaveValue("");
          expect(screen.getByPlaceholderText("CPF:")).toHaveValue("");
          expect(
            screen.getByPlaceholderText("Data de nascimento:")
          ).toHaveValue("");
          expect(screen.getByPlaceholderText("Seu email:")).toHaveValue("");
          expect(screen.getByPlaceholderText("Celular:")).toHaveValue("");
          expect(screen.getByPlaceholderText("Cidade:")).toHaveValue("");
          expect(screen.getByPlaceholderText("Estado:")).toHaveValue("");
          expect(screen.getByPlaceholderText("Endereço:")).toHaveValue("");
        },
        { timeout: 10000 }
      );
    });
  });

  describe("Radio Group Selection", () => {
    it("should allow selecting public school student option", async () => {
      render(<RegistrationForm />);

      const yesOption = screen.getByLabelText("Sim");
      await user.click(yesOption);

      expect(yesOption).toBeChecked();
    });

    it("should allow selecting non-public school student option", async () => {
      render(<RegistrationForm />);

      const noOption = screen.getByLabelText("Não");
      await user.click(noOption);

      expect(noOption).toBeChecked();
    });
  });

  describe("Responsive Layout", () => {
    it("should have responsive grid classes", () => {
      render(<RegistrationForm />);

      const cpfInput = screen.getByPlaceholderText("CPF:");
      const gridContainer = cpfInput.closest(".grid");
      expect(gridContainer).toHaveClass("grid-cols-1", "sm:grid-cols-2");
    });

    it("should have responsive spacing", () => {
      render(<RegistrationForm />);

      const cpfInput = screen.getByPlaceholderText("CPF:");
      const form = cpfInput.closest("form");
      expect(form).toHaveClass("space-y-4", "sm:space-y-6");
    });
  });
});
