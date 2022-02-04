import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Buttons, ContentModal } from "./styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import add from "../../assets/add.png";

interface IProps {
  closeModal: () => void;
  open: boolean;
}

const AddAgentModal = ({ closeModal, open }: IProps): React.ReactElement => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <div className="table">
              <FormControl
                fullWidth
                className="function"
                variant="outlined"
                error={
                  formik.touched.function && Boolean(formik.errors.function)
                }
              >
                <InputLabel id="function">Função</InputLabel>
                <Select
                  name="function"
                  labelId="function"
                  id="function"
                  label="Função"
                  value={formik.values.function}
                  onChange={formik.handleChange}
                >
                  <MenuItem>Duelista</MenuItem>
                  <MenuItem>Controlador</MenuItem>
                  <MenuItem>Iniciador</MenuItem>
                  <MenuItem>Sentinela</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.function && formik.errors.function}
                </FormHelperText>
              </FormControl>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Descrição"
                variant="outlined"
                className="field2"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
              <div className="add">
                <img src={add} />
                <p>Foto</p>
              </div>
              <TextField
                fullWidth
                id="skill1"
                name="skill1"
                label="Habilidade - 1"
                variant="outlined"
                value={formik.values.skill1}
                onChange={formik.handleChange}
                className="field3"
                error={formik.touched.skill1 && Boolean(formik.errors.skill1)}
                helperText={formik.touched.skill1 && formik.errors.skill1}
              />
              <TextField
                fullWidth
                id="damage1"
                name="damage1"
                label="Dano habilidade - 1"
                variant="outlined"
                className="field4"
                value={formik.values.damage1}
                onChange={formik.handleChange}
                error={formik.touched.damage1 && Boolean(formik.errors.damage1)}
                helperText={formik.touched.damage1 && formik.errors.damage1}
                // inputProps={{ minLength: 6, maxLength: 6 }}
              />
              <TextField
                fullWidth
                id="skill2"
                name="skill2"
                label="Habilidade - 2"
                variant="outlined"
                className="field5"
                value={formik.values.skill2}
                onChange={formik.handleChange}
                error={formik.touched.skill2 && Boolean(formik.errors.skill2)}
                helperText={formik.touched.skill2 && formik.errors.skill2}
              />
              <TextField
                fullWidth
                id="damage2"
                name="damage2"
                label="Dano habilidade - 2"
                variant="outlined"
                className="field6"
                value={formik.values.damage2}
                onChange={formik.handleChange}
                error={formik.touched.damage2 && Boolean(formik.errors.damage2)}
                helperText={formik.touched.damage2 && formik.errors.damage2}
              />
              <TextField
                fullWidth
                id="skill3"
                name="skill3"
                label="Habilidade - 3"
                variant="outlined"
                value={formik.values.skill3}
                onChange={formik.handleChange}
                className="field7"
                error={formik.touched.skill3 && Boolean(formik.errors.skill3)}
                helperText={formik.touched.skill3 && formik.errors.skill3}
              />
              <TextField
                fullWidth
                id="damage3"
                name="damage3"
                label="Dano habilidade - 3"
                variant="outlined"
                className="field8"
                value={formik.values.damage3}
                onChange={formik.handleChange}
                error={formik.touched.damage3 && Boolean(formik.errors.damage3)}
                helperText={formik.touched.damage3 && formik.errors.damage3}
              />
              <TextField
                fullWidth
                id="skill4"
                name="skill4"
                label="Habilidade - 4"
                variant="outlined"
                className="field9"
                value={formik.values.skill4}
                onChange={formik.handleChange}
                error={formik.touched.skill4 && Boolean(formik.errors.skill4)}
                helperText={formik.touched.skill4 && formik.errors.skill4}
              />
              <TextField
                fullWidth
                id="damage4"
                name="damage4"
                label="Dano habilidade - 4"
                variant="outlined"
                className="field10"
                value={formik.values.damage4}
                onChange={formik.handleChange}
                error={formik.touched.damage4 && Boolean(formik.errors.damage4)}
                helperText={formik.touched.damage4 && formik.errors.damage4}
              />
            </div>
            <Buttons>
              <Button className="btnCancel" variant="outlined">
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
          </form>
        </ContentModal>
      </Modal>
    </>
  );
};

export default AddAgentModal;
