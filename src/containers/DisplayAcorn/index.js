import React from "react";
import connect from "react-redux/es/connect/connect";
import Display from "../../components/Display/display";

const mapStateToProps = (state) => {
  return {
      counter: state.acorns
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
  null
)(Display);

export default DisplayAcorn;