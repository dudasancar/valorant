import React, { useState } from "react";
import HeaderAgents from "../../components/HeaderAgents";
import { Container, Content } from "./styles";
import jett from "../../assets/agents/jett.png";
import raze from "../../assets/agents/raze.png";
import breach from "../../assets/agents/breach.png";
import omen from "../../assets/agents/omen.png";
import brimstone from "../../assets/agents/brimstone.png";
import phoenix from "../../assets/agents/phoenix.png";
import sage from "../../assets/agents/sage.png";
import sova from "../../assets/agents/sova.png";
import viper from "../../assets/agents/viper.png";
import cypher from "../../assets/agents/cypher.png";
import reyna from "../../assets/agents/reyna.png";
import add from "../../assets/add.png";
import AddAgentModal from "../../components/AddAgentModal";
import AgentsModal from "../../components/AgentsModal";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import SearchIcon from "@mui/icons-material/Search";

const Agents: React.FC = () => {
  const [openModalAgents, setOpenModalAgents] = useState<boolean>(false);
  const [openModalAddAgent, setOpenModalAddAgent] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <AddAgentModal
        closeModal={() => setOpenModalAddAgent(false)}
        open={openModalAddAgent}
      />
      <AgentsModal
        closeModal={() => setOpenModalAgents(false)}
        open={openModalAgents}
      />
      <HeaderAgents />
      <Content>
        <h1>Agentes</h1>
        <FormControl className="search">
          <TextField
            variant="outlined"
            placeholder="Pesquisar agentes..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <div className="filter-box">
          <div className="filter">
            <p className="title-filter">Filtrar agentes</p>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                fullWidth
                className="function"
                variant="outlined"
                error={formik.touched.skills && Boolean(formik.errors.skills)}
              >
                <InputLabel id="skills">Selecione uma habilidade</InputLabel>
                <Select
                  name="skills"
                  labelId="skills"
                  id="skills"
                  label="Selecione uma habilidade"
                  value={formik.values.skills}
                  onChange={formik.handleChange}
                >
                  <MenuItem>Arma branca</MenuItem>
                  <MenuItem>Arma primária</MenuItem>
                  <MenuItem>Arma secundária</MenuItem>
                  <MenuItem>Especial</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.skills && formik.errors.skills}
                </FormHelperText>
              </FormControl>
              <FormControl
                fullWidth
                className="function"
                variant="outlined"
                error={formik.touched.filter && Boolean(formik.errors.filter)}
              >
                <InputLabel id="filter">Selecione um filtro</InputLabel>
                <Select
                  name="filter"
                  labelId="filter"
                  id="filter"
                  label="Selecione um filtro"
                  value={formik.values.filter}
                  onChange={formik.handleChange}
                >
                  <MenuItem>Arma branca</MenuItem>
                  <MenuItem>Arma primária</MenuItem>
                  <MenuItem>Arma secundária</MenuItem>
                  <MenuItem>Especial</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.filter && formik.errors.filter}
                </FormHelperText>
              </FormControl>
              <TextField
                fullWidth
                id="damage"
                name="damage"
                label="Informe o valor do dano"
                variant="outlined"
                value={formik.values.damage}
                onChange={formik.handleChange}
                className="field3"
                error={formik.touched.damage && Boolean(formik.errors.damage)}
                helperText={formik.touched.damage && formik.errors.damage}
              />
              <Button
                className="btn-filter"
                color="secondary"
                variant="contained"
                type="submit"
              >
                Filtrar
              </Button>
            </form>
          </div>
        </div>
        <div className="agents">
          {/* {listAgents.map((agent: any) => (
            <> */}
          <div className="add" onClick={() => setOpenModalAddAgent(true)}>
            <img src={add} />
            <p>Adicionar</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={jett} />
            <p>Jett</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={raze} />
            <p>Raze</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={breach} />
            <p>Breach</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={omen} />
            <p>Omen</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={brimstone} />
            <p>Brimstone</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={phoenix} />
            <p>Phoenix</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={sage} />
            <p>Sage</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={sova} />
            <p>Sova</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={viper} />
            <p>Viper</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={cypher} />
            <p>Cypher</p>
          </div>
          <div className="agent" onClick={() => setOpenModalAgents(true)}>
            <img src={reyna} />
            <p>Reyna</p>
          </div>
          {/* </>
          ))} */}
        </div>
      </Content>
    </Container>
  );
};

export default Agents;
