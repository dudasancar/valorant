import React from "react";
import GlobalStyle from "./globalStyles";
import RoutesValorant from "./routes";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesValorant />
    </div>
  );
};

export default App;
