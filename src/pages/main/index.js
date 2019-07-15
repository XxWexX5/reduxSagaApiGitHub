import React, { Component, Fragment } from "react";

import "../../config/ReactotronConfig";

import { connect } from "react-redux";

import * as favoriteActions from "../../store/actions/favorites";

import { bindActionCreators } from "redux";

class Main extends Component {
  state = {
    repositoryInput: ""
  };

  handleAddRepository = e => {
    e.preventDefault();

    const { addFavoriteRequest } = this.props;
    addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: "" });
  };

  render() {
    const { favorites } = this.props;

    console.tron.log(favorites);

    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>

          {favorites.loading && <span>Carregando!</span>}

          {!!favorites.error && (
            <span style={{ color: "#F00" }}>{favorites.error}</span>
          )}
        </form>

        <ul>
          {favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p style={{ margin: 0 }}>
                <strong>{favorite.name}</strong> {favorite.description}
              </p>
              <a href={favorite.url} target="_blank" rel="noopener noreferrer">
                Acessar
              </a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(favoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
