import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound txt="Página" />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;