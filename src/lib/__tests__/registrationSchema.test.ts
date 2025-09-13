import { registrationFormSchema } from "../registrationSchema";

describe("Registration Form Schema", () => {
  describe("fullName validation", () => {
    it("should accept valid names", () => {
      const validNames = [
        "João Silva",
        "Maria José Santos",
        "José da Silva",
        "Ana Paula",
        "Carlos Eduardo",
      ];

      validNames.forEach((name) => {
        const result = registrationFormSchema.safeParse({
          fullName: name,
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(true);
      });
    });

    it("should reject names with numbers or special characters", () => {
      const invalidNames = [
        "João123",
        "Maria@Silva",
        "José-Silva",
        "Ana.Paula",
        "Carlos123Silva",
      ];

      invalidNames.forEach((name) => {
        const result = registrationFormSchema.safeParse({
          fullName: name,
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toContain(
            "Nome deve conter apenas letras e espaços"
          );
        }
      });
    });

    it("should reject names that are too short or too long", () => {
      const shortName = "A";
      const longName = "A".repeat(101);

      const shortResult = registrationFormSchema.safeParse({
        fullName: shortName,
        cpf: "12345678901",
        birthDate: "01/01/2000",
        email: "test@example.com",
        phone: "11999999999",
        city: "São Paulo",
        state: "SP",
        address: "Rua Teste, 123",
        isPublicSchoolStudent: "true",
      });

      const longResult = registrationFormSchema.safeParse({
        fullName: longName,
        cpf: "12345678901",
        birthDate: "01/01/2000",
        email: "test@example.com",
        phone: "11999999999",
        city: "São Paulo",
        state: "SP",
        address: "Rua Teste, 123",
        isPublicSchoolStudent: "true",
      });

      expect(shortResult.success).toBe(false);
      expect(longResult.success).toBe(false);
    });
  });

  describe("CPF validation", () => {
    it("should accept valid CPFs", () => {
      const validCPFs = ["11144477735", "12345678909", "98765432100"];

      validCPFs.forEach((cpf) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: cpf,
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(true);
      });
    });

    it("should reject invalid CPFs", () => {
      const invalidCPFs = ["11111111111", "12345678901", "00000000000", "123"];

      invalidCPFs.forEach((cpf) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: cpf,
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(false);
      });
    });
  });

  describe("birthDate validation", () => {
    it("should accept valid dates within age range", () => {
      const validDates = ["01/01/2005", "15/06/2000", "31/12/2008"];

      validDates.forEach((date) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: date,
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(true);
      });
    });

    it("should reject dates outside age range", () => {
      const invalidDates = [
        "01/01/2012",
        "01/01/1990",
        "32/01/2000",
        "01/13/2000",
        "29/02/2001",
      ];

      invalidDates.forEach((date) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: date,
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(false);
      });
    });

    it("should reject invalid date formats", () => {
      const invalidFormats = [
        "1/1/2000",
        "01-01-2000",
        "2000/01/01",
        "01/01/00",
      ];

      invalidFormats.forEach((date) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: date,
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(false);
      });
    });
  });

  describe("email validation", () => {
    it("should accept valid emails", () => {
      const validEmails = [
        "test@example.com",
        "user.name@domain.co.uk",
        "test+tag@example.org",
        "user123@test-domain.com",
      ];

      validEmails.forEach((email) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: email,
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(true);
      });
    });

    it("should reject invalid emails", () => {
      const invalidEmails = [
        "invalid-email",
        "@domain.com",
        "user@",
        "user@domain",
        "",
      ];

      invalidEmails.forEach((email) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: email,
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(false);
      });
    });
  });

  describe("phone validation", () => {
    it("should accept valid phone numbers", () => {
      const validPhones = [
        "11999999999",
        "1199999999",
        "(11) 99999-9999",
        "(11) 9999-9999",
      ];

      validPhones.forEach((phone) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: phone,
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(true);
      });
    });

    it("should reject invalid phone numbers", () => {
      const invalidPhones = ["123", "123456789012", "abc1234567", ""];

      invalidPhones.forEach((phone) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: phone,
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(false);
      });
    });
  });

  describe("address validation", () => {
    it("should accept valid addresses", () => {
      const validAddresses = [
        "Rua das Flores, 123",
        "Avenida Paulista, 1000",
        "Praça da Sé, s/n",
        "R. Teste, 456, apto 12",
      ];

      validAddresses.forEach((address) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: address,
          isPublicSchoolStudent: "true",
        });
        expect(result.success).toBe(true);
      });
    });

    it("should reject addresses that are too short or too long", () => {
      const shortAddress = "Rua";
      const longAddress = "R".repeat(201);

      const shortResult = registrationFormSchema.safeParse({
        fullName: "João Silva",
        cpf: "11144477735",
        birthDate: "01/01/2000",
        email: "test@example.com",
        phone: "11999999999",
        city: "São Paulo",
        state: "SP",
        address: shortAddress,
        isPublicSchoolStudent: "true",
      });

      const longResult = registrationFormSchema.safeParse({
        fullName: "João Silva",
        cpf: "11144477735",
        birthDate: "01/01/2000",
        email: "test@example.com",
        phone: "11999999999",
        city: "São Paulo",
        state: "SP",
        address: longAddress,
        isPublicSchoolStudent: "true",
      });

      expect(shortResult.success).toBe(false);
      expect(longResult.success).toBe(false);
    });
  });

  describe("isPublicSchoolStudent validation", () => {
    it("should accept valid options", () => {
      const validOptions = ["true", "false"];

      validOptions.forEach((option) => {
        const result = registrationFormSchema.safeParse({
          fullName: "João Silva",
          cpf: "11144477735",
          birthDate: "01/01/2000",
          email: "test@example.com",
          phone: "11999999999",
          city: "São Paulo",
          state: "SP",
          address: "Rua Teste, 123",
          isPublicSchoolStudent: option,
        });
        expect(result.success).toBe(true);
      });
    });

    it("should reject empty selection", () => {
      const result = registrationFormSchema.safeParse({
        fullName: "João Silva",
        cpf: "11144477735",
        birthDate: "01/01/2000",
        email: "test@example.com",
        phone: "11999999999",
        city: "São Paulo",
        state: "SP",
        address: "Rua Teste, 123",
        isPublicSchoolStudent: "",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("complete form validation", () => {
    it("should accept a complete valid form", () => {
      const validForm = {
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

      const result = registrationFormSchema.safeParse(validForm);
      expect(result.success).toBe(true);
    });

    it("should reject incomplete forms", () => {
      const incompleteForm = {
        fullName: "João Silva",
        cpf: "11144477735",
      };

      const result = registrationFormSchema.safeParse(incompleteForm);
      expect(result.success).toBe(false);
    });
  });
});
