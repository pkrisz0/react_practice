import React from "react";
import PropTypes from 'prop-types';

export default function Display(props) {
  return <div><p>{props.counter}</p></div>
}

Display.propTypes = {
  counter: PropTypes.number.isRequired
};