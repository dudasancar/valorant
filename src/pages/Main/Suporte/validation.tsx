import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string(),
  lastname: Yup.string(),
  email: Yup.string().email(),
  nickname: Yup.string(),
  subject: Yup.string(),
  description: Yup.string(),
});

export const initialValues = {
  name: "",
  lastname: "",
  email: "",
  nickname: "",
  subject: "",
  description: "",
};
