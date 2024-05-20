import { Header } from "../src/components/Header";
import { Article } from "./components/Article";
import { Carrusel } from "./components/Carrusel";
import { Contact } from "./components/Contact";
import { Paquetes } from "./components/Paquetes";
import { SamplesArticle } from "./components/SamplesArticle";

function App() {
  return (
    <main className="bg-DarkBlue">
      <Header />
      <Article />
      <SamplesArticle />
      <Carrusel />
      <Paquetes />
      <Contact />
    </main>
  );
}

export default App;
