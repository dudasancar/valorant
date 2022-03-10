import { Button, Grid, MenuItem, Modal } from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Buttons, ContentModal } from "./styles";
import { Field, FieldArray, Form, Formik } from "formik";
import { initialValues, validationSchema } from "./validation";
import { IconButton, Input } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { TextField, Select } from "formik-material-ui";

interface IProps {
  closeModal: () => void;
  open: boolean;
  agents: any | null;
  addNewAgent: (value: any[]) => void;
}

const AddAgentModal = ({
  closeModal,
  open,
  agents,
  addNewAgent,
}: IProps): React.ReactElement => {
  const [baseImage, setBaseImage] = useState<unknown>("");

  const UploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
      >
        <ContentModal>
          <CloseIcon className="close-icon" onClick={closeModal} />
          <h1>Adicionar agente</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: any) => {
              values.image = baseImage;
              console.log(values);
              const aux = [...agents];
              aux.push(values);
              addNewAgent(aux);
              // alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values }) => (
              <Form autoComplete="off">
                <div className="table">
                  <div>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          required
                          name="name"
                          component={TextField}
                          label="Nome"
                          variant="outlined"
                          className="name"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          required
                          name="description"
                          component={TextField}
                          label="Descrição"
                          variant="outlined"
                          className="description"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          name="function"
                          component={Select}
                          label="Função"
                          variant="outlined"
                          className="function"
                        >
                          <MenuItem value="Duelista">Duelista</MenuItem>
                          <MenuItem value="Controlador">Controlador</MenuItem>
                          <MenuItem value="Iniciador">Iniciador</MenuItem>
                          <MenuItem value="Sentinela">Sentinela</MenuItem>
                        </Field>
                      </Grid>

                      <FieldArray name="skills">
                        {({ push, remove }) => (
                          <>
                            {values.skills.map((skill: any, index: number) => (
                              <Grid item xs={6} key={index}>
                                <Field
                                  fullWidth
                                  required
                                  type="number"
                                  name={`skills.${index}.damage`}
                                  component={TextField}
                                  variant="outlined"
                                  label={`Dano Habilidade - ${skill.type}`}
                                  className="skills"
                                />
                              </Grid>
                            ))}
                          </>
                        )}
                      </FieldArray>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          name="random"
                          component={TextField}
                          label=""
                          variant="outlined"
                          className="random"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          name="random"
                          component={TextField}
                          label=""
                          variant="outlined"
                          className="random"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          name="random"
                          component={TextField}
                          label=""
                          variant="outlined"
                          className="random"
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <div
                      className="add"
                      style={{
                        backgroundImage: `url('${baseImage}')`,
                      }}
                    >
                      {baseImage ? (
                        <div></div>
                      ) : (
                        <div>
                          <label>
                            <Input
                              inputProps={{ accept: "image/*" }}
                              type="file"
                              onChange={(e) => UploadImage(e)}
                              name="image"
                              id="image"
                              value={agents.image}
                            />
                            <IconButton color="secondary" component="span">
                              <AddCircleOutlineOutlinedIcon />
                            </IconButton>
                            Foto
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Buttons>
                  <Button
                    className="btnCancel"
                    variant="outlined"
                    onClick={closeModal}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="btnSave"
                    color="secondary"
                    variant="contained"
                    type="submit"
                  >
                    Salvar
                  </Button>
                </Buttons>
              </Form>
            )}
          </Formik>
        </ContentModal>
      </Modal>
    </>
  );
};

export default AddAgentModal;
