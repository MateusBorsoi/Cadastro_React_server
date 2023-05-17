import { Component } from "react";
import Main from "../components/template/Main";
import axios from "axios";

const HeaderProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir ",
};

const baseUrl = "http://localhost:3003/users";

const inicialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  state = { ...inicialState };

  clear() {
    this.setState({ user: inicialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: inicialState.user, list });
      list.unshift(user);
      return list;
    });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter((u) => u.id !== user.id);
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={event => this.updateField(event)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <Main {...HeaderProps}>Usuário</Main>;
  }
}
