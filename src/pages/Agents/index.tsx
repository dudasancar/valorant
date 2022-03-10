import React, { useEffect, useState } from "react";
import HeaderAgents from "../../components/HeaderAgents";
import { Container, Content } from "./styles";
import add from "../../assets/add.png";
import AddAgentModal from "../../components/AddAgentModal";
import AgentsModal from "../../components/AgentsModal";
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import SearchIcon from "@mui/icons-material/Search";
import { getAgents } from "../../services/ListAgents";

const Agents: React.FC = () => {
  const [modalData, setModalData] = useState<any | null>(null);
  const [openModalAddAgent, setOpenModalAddAgent] = useState<boolean>(false);
  const [listAgents, setListAgents] = useState([]);

  useEffect(() => {
    getAgents()
      .then((response: any) => {
        setListAgents(response);
        // setsearchAgent(response);
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, event) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSearch = (event: any) => {
    let value = event.target.value;
    let result = [];
    console.log(value);
    result = listAgents.filter((data: any) => {
      return data.name.search(value) != -1;
    });
    // setsearchAgent(result);
  };

  const onFinish = (agent: any) => {
    setListAgents(agent);
    setOpenModalAddAgent(false);
  };

  return (
    <Container>
      <AddAgentModal
        closeModal={() => setOpenModalAddAgent(false)}
        open={openModalAddAgent}
        agents={listAgents}
        addNewAgent={onFinish}
      />
      <AgentsModal
        closeModal={() => setModalData(null)}
        open={Boolean(modalData)}
        agents={modalData}
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
            onChange={(event) => handleSearch(event)}
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
                  <MenuItem value="whiteGun">Arma branca</MenuItem>
                  <MenuItem value="firstGun">Arma primária</MenuItem>
                  <MenuItem value="secondGun">Arma secundária</MenuItem>
                  <MenuItem value="especial">Especial</MenuItem>
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
                  <MenuItem value="biggest">Maior ao menor</MenuItem>
                  <MenuItem value="smaller">Menor ao maior</MenuItem>
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
          <div className="add" onClick={() => setOpenModalAddAgent(true)}>
            <img src={add} />
            <p>Adicionar</p>
          </div>
          {listAgents.map((agent: any) => (
            <div className="agent" onClick={() => setModalData(agent)}>
              <img src={agent?.image} />
              <p>{agent?.name}</p>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default Agents;
