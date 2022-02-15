import { Divider, Tabs } from "@material-ui/core";
import React from "react";
import { Content } from "./styles";
import map1 from "../../assets/map1.png";
import map2 from "../../assets/map2.png";
import map3 from "../../assets/map3.png";
import map4 from "../../assets/map4.png";
import map5 from "../../assets/map5.png";

const Maps: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Content>
      <Divider />
      <h1>Mapas</h1>
      <Tabs
        value={value}
        onChange={() => handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <img src={map1} />
        <img src={map2} />
        <img src={map3} />
        <img src={map4} />
        <img src={map5} />
      </Tabs>
      <p>Ver mais</p>
      <div className="divider">
        <Divider />
      </div>
    </Content>
  );
};

export default Maps;
