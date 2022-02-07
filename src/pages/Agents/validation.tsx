import * as Yup from "yup";

export const validationSchema = Yup.object({
  skills: Yup.string(),
  filter: Yup.string(),
  damage: Yup.string(),
});

export const initialValues = {
  skills: "",
  filter: "",
  damage: "",
};
