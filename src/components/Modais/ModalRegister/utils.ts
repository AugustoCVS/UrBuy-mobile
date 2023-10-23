import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  companyName: yup.string().required("O nome da empresa é obrigatório"),

  cnpj: yup
    .string()
    .required("O CNPJ é obrigatório")
    .test("cnpj", "CNPJ inválido", function (value) {
      const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}|\d{14}$/;

      const cleanedCnpj = value.replace(/[./-]/g, "");

      return cnpjRegex.test(cleanedCnpj);
    }),

  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .test("password", "Senha inválida", function (value) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),

  cep: yup
    .string()
    .required("O CEP é obrigatório")
    .test("cep", "CEP inválido", function (value) {
      const cleanedCep = value.replace(/[^\d]/g, "");
      const cepRegex = /^\d{8}$/;

      return cepRegex.test(cleanedCep);
    }),

  street: yup.string().required("A rua é obrigatória"),

  complement: yup.string(),

  selectedOption: yup
  .string()
  .test(
    "selectedOption",
    "Selecione pelo menos uma opção",
    (value) => value === "Comprador" || value === "Fornecedor"
  )
  .required("Selecione pelo menos uma opção"),
});
