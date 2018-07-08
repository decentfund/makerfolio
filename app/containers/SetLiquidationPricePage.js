import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SetLiquidationPrice from '../components/SetLiquidationPrice';
import * as SettingsActions from '../actions/settings';

function mapStateToProps(state) {
  return {
    liquidationPrice: state.settings.liquidationPrice
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetLiquidationPrice);
