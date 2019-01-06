import React from "react";
import PropTypes from 'prop-types';

export default function Button(props) {
  return <button type="button" onClick={props.onClick}>{props.name}</button>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
