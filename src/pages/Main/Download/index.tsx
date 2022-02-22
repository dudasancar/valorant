import React from "react";
import { Content } from "./styles";
import download from "../../../assets/download.png";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DownloadIcon from "../../../assets/download-button.png";
import { Button } from "@material-ui/core";

const Download: React.FC = () => {
  return (
    <Content>
      <div className="flex-container">
        <div className="all-text">
          <h1>Baixe o jogo</h1>
          <div className="text">
            <GroupsOutlinedIcon />
            <p>Jogue com os seus amigos</p>
          </div>
          <div className="text">
            <ShoppingCartOutlinedIcon />
            <p>Compre itens digitais</p>
          </div>
          <div className="text">
            <EmojiEventsOutlinedIcon />
            <p>Torneios independentes</p>
          </div>
          <Button color="secondary" variant="contained">
            <img src={DownloadIcon} />
            Download
          </Button>
        </div>
        <div>
          <img src={download} />
        </div>
      </div>
    </Content>
  );
};

export default Download;
