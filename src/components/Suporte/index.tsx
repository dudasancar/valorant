import React from "react";
import { Content } from "./styles";
import { Paper } from "@mui/material";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import suporte from "../../assets/suporte.png";

const Suporte: React.FC = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Content>
      <Paper>
        <h1>Suporte</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="table">
            <TextField
              id="name"
              name="name"
              label="Nome"
              variant="outlined"
              className="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="lastname"
              name="lastname"
              label="Sobrenome"
              variant="outlined"
              className="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              className="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="nickname"
              name="nickname"
              label="Apelido do jogador"
              variant="outlined"
              className="nickname"
              value={formik.values.nickname}
              onChange={formik.handleChange}
              error={formik.touched.nickname && Boolean(formik.errors.nickname)}
              helperText={formik.touched.nickname && formik.errors.nickname}
            />
            <TextField
              id="subject"
              name="subject"
              label="Assunto"
              variant="outlined"
              className="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
            <TextField
              id="description"
              name="description"
              label="Descrição"
              variant="outlined"
              multiline
              rows={6}
              className="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <div className="img">
              <img src={suporte} />
            </div>
            <div className="btn">
              <Button color="secondary" variant="contained" type="submit">
                Enviar
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </Content>
  );
};

export default Suporte;
