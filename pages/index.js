import React from "react";
import Head from "next/head";
import Main from "../components/Main";
import { ThemeProvider } from "styled-components";

const theme = {
  grey: "#D3D3D3"
};

const Home = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Main />
    </div>
  </ThemeProvider>
);

export default Home;
