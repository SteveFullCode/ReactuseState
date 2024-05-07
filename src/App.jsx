import { useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(e) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    );
    const json = await response.json();
    console.log(json);
    setDados(json);
    setLoading(false);
  }

  return (
    <div className="flex flex-col  w-screen h-screen pt-3">
      <section className="flex justify-around">
        <button className="bg-black text-green-400 p-3 " onClick={handleClick}>
          notebook
        </button>
        <button className="bg-black text-green-400 p-3 " onClick={handleClick}>
          smartphone
        </button>
        <button className="bg-black text-green-400 p-3 " onClick={handleClick}>
          tablet
        </button>
      </section>
      {loading && <p className="text-center pt-10">carregando...</p>}
      {!loading && dados && <Produto dados={dados} key={dados.nome} />}
    </div>
  );
};

export default App;
