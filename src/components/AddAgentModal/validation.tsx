import * as Yup from "yup";

export const validationSchema = Yup.object({
  function: Yup.string(),
  description: Yup.string(),
  skill1: Yup.string(),
  skill2: Yup.string(),
  skill3: Yup.string(),
  skill4: Yup.string(),
  damage1: Yup.string(),
  damage2: Yup.string(),
  damage3: Yup.string(),
  damage4: Yup.string(),
});

export const initialValues = {
  function: "",
  description: "",
  skill1: "",
  skill2: "",
  skill3: "",
  skill4: "",
  damage1: "",
  damage2: "",
  damage3: "",
  damage4: "",
};
