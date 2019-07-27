import React from "react";
import Head from "next/head";
import Main from "../components/Main";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/index";
import { GlobalStyle } from "../style/global";

const theme = {
  grey: "#D3D3D3",
  disabledPurple: "#b7b7c7",
  disabledLightPurple: "#d1d1e0"
};

const Home = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%" }}>
        <Head>
          <title>Home</title>
        </Head>
        <Main />
      </div>
    </ThemeProvider>
  </Provider>
);

export default Home;
