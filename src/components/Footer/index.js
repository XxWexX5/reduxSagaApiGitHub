import React from "react";

import { connect } from "react-redux";

const Footer = ({ count }) => {
  return <p>Você possui {count} favoritos</p>;
};

const mapStateToProps = state => ({
  count: state.favorites.data.length
});

export default connect(mapStateToProps)(Footer);
