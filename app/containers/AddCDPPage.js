import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddCDP from '../components/AddCDP';
import * as UserActions from '../actions/user';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCDP);
