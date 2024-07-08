import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />

          {/* 
          Na rota "/" a se ser renderizada é:
            <PaginaPadrao>
              <Inicio />
            </PaginaPadrao>

          Na rota "/sobremim" a se ser denderizada é:
            <PaginaPadrao>
              <SobreMim />
            </PaginaPadrao>
          */}
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
