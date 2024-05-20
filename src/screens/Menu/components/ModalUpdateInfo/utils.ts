import * as yup from "yup";

export const updateUserInfoSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Digite um e-mail válido"),
  cnpj: yup.string().test("cnpj", "CNPJ inválido", function (value) {
    const cnpjRegex = /^\d{14}$/;
    return cnpjRegex.test(value.replace(/\D/g, ""));
  }),
});

export const formFields = [
  {
    id: 0,
    name: "name",
    label: "Nome",
    placeholder: "Nome",
  },
  {
    id: 1,
    name: "email",
    label: "E-mail",
    placeholder: "E-mail",
  },
  {
    id: 2,
    name: "cnpj",
    label: "CNPJ",
    placeholder: "CNPJ",
  },
];
