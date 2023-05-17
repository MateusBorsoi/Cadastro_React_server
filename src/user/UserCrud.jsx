import { Component } from "react";
import Main from "../components/template/Main";
import axios from "axios";

const HeaderProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir ",
};

const baseUrl = 'http://localhost:3003/users'

const inicialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {
    state = {...inicialState}

    clear() {
        this.setState({user: inicialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({user: inicialState.user, list})
        })
    }

    getUpdatedList(user){
        const list = this.state.list.filter()
    }

    render () {
        return (
            <Main {...HeaderProps}>
                Usuário
            </Main>
        )
    }
}

