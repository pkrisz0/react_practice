import { connect } from 'react-redux';
import { buyAcorn} from '../../actions';
import Button from '../../components/Button/button';

const mapStateToProps = (state) => {
  return {
    name: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buyAcorn());
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;