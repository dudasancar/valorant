import React from "react";
import { Container, Content } from "./styles";
import { Paper } from "@mui/material";
import { Button, Grid, TextField } from "@material-ui/core";
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
    <Container>
      <Content>
        <Paper>
          <h1>Suporte</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="table">
              <TextField
                id="name"
                name="name"
                label="Descrição"
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
                label="Descrição"
                variant="outlined"
                className="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
              <TextField
                id="lastname"
                name="lastname"
                label="Descrição"
                variant="outlined"
                className="email"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
              <TextField
                id="lastname"
                name="lastname"
                label="Descrição"
                variant="outlined"
                className="nickname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
              <TextField
                id="lastname"
                name="lastname"
                label="Descrição"
                variant="outlined"
                className="subject"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
              <TextField
                id="lastname"
                name="lastname"
                label="Descrição"
                variant="outlined"
                className="description"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
              <div className="img">
                <img src={suporte} />
              </div>
            </div>
            <Button color="secondary" variant="contained">
              Enviar
            </Button>
          </form>
        </Paper>
      </Content>
    </Container>
  );
};

export default Suporte;
