import { PropTypes } from "prop-types";

const Produto = ({ dados }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <section className="flex gap-3 bg-slate-200">
        <h1>{dados.nome}</h1>
        <p>{`R$: ${dados.preco}`}</p>
      </section>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

Produto.propTypes = {
  dados: PropTypes.object.isRequired,
};

export default Produto;
