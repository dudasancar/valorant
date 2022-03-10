import * as Yup from "yup";

export const validationSchema = Yup.object({
  image: Yup.string(),
  function: Yup.string(),
  description: Yup.string(),
  name: Yup.string(),
  skills: Yup.array().of(
    Yup.object().shape({
      type: Yup.number(),
      damage: Yup.number(),
    })
  ),
});

export const initialValues = {
  image: "",
  function: "",
  description: "",
  name: "",
  skills: [
    {
      type: 1,
      damage: "",
    },
    {
      type: 2,
      damage: "",
    },
    {
      type: 3,
      damage: "",
    },
    {
      type: 4,
      damage: "",
    },
  ],
};
