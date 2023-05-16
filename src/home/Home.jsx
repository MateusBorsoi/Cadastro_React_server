import Main from "../components/template/Main";

const Home = () => {
  return (
    <Main icon="home" title="Inicio" subtitle="Segundo Projeto">
      <div className="display-4">Bem vindo(a)</div>
      <hr />
      <p className="mb-0">
        Sistema de cadastro de usuários desenvolvido em React
      </p>
    </Main>
  );
};

export default Home;
