import { Component } from "react";
import Main from "../components/template/Main";

const HeaderProps = {
  icon: "users",
  title: "Usuários",
  title: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir ",
};

export default class UserCrud extends Component {
    render () {
        return (
            <Main {...HeaderProps}>
                Usuário
            </Main>
        )
    }
}

