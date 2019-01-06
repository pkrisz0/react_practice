import { connect } from 'react-redux';
import { eatAcorn } from '../../actions';
import Button from '../../components/Button/button';

const mapStateToProps = (state) => {
  return {
    name: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(eatAcorn());
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;