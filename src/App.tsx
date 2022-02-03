import React from "react";
import GlobalStyle from "./globalStyles";
import Main from "./pages/Main";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
};

export default App;
