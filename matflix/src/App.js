import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import dadosIniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain"
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const AppWrapper = styled.div`
background: var(--grayDark);
`;


function App() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Confira meu GitHub!"}
      />

      {/* <Carousel
      importFirstVideo
      category={dadosIniciais.categorias[0]}
      /> */}
    </AppWrapper>
  );
}

export default App;
