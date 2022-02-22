import React from "react";
import { Content } from "./styles";
import selectGun from "../../../assets/select-gun.png";
import { Box, Tabs } from "@material-ui/core";
import gun6 from "../../../assets/guns/gun6.png";
import gun8 from "../../../assets/guns/gun8.png";
import gun11 from "../../../assets/guns/gun11.png";
import gun12 from "../../../assets/guns/gun12.png";
import gun7 from "../../../assets/guns/gun7.png";
import gun14 from "../../../assets/guns/gun14.png";
import gun15 from "../../../assets/guns/gun15.png";
import gun13 from "../../../assets/guns/gun13.png";
import gun9 from "../../../assets/guns/gun9.png";
import gun10 from "../../../assets/guns/gun10.png";
import gun4 from "../../../assets/guns/gun4.png";
import gun3 from "../../../assets/guns/gun3.png";
import gun1 from "../../../assets/guns/gun1.png";
import gun5 from "../../../assets/guns/gun5.png";
import agentGun from "../../../assets/agent-gun.png";

const Guns: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Content>
      <div className="title">
        <h1>Escolha sua arma</h1>
        <img src={selectGun} />
      </div>
      <div className="flex-container">
        <div>
          <h2>Arma primária</h2>
          <Box style={{ maxWidth: 450, maxHeight: 300 }}>
            <Tabs
              value={value}
              onChange={() => handleChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <img src={gun6} />
              <img src={gun8} />
              <img src={gun11} />
              <img src={gun12} />
              <img src={gun7} />
            </Tabs>
          </Box>
          <h2>Arma secundária</h2>
          <Box style={{ maxWidth: 450, maxHeight: 300 }}>
            <Tabs
              value={value}
              onChange={() => handleChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <img src={gun14} />
              <img src={gun15} />
              <img src={gun13} />
              <img src={gun9} />
              <img src={gun10} />
            </Tabs>
          </Box>
          <h2>Arma branca</h2>
          <Box style={{ maxWidth: 450, maxHeight: 300 }}>
            <Tabs
              value={value}
              onChange={() => handleChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <img src={gun4} />
              <img src={gun3} />
              <img src={gun1} />
              <img src={gun5} />
            </Tabs>
          </Box>
        </div>
        <div>
          <img src={agentGun} />
        </div>
      </div>
    </Content>
  );
};

export default Guns;
