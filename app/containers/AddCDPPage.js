import { connect } from 'react-redux';
import AddCDP from '../components/AddCDP';
import { addCdpIdToUser } from '../actions/user';

export default connect(null, { addCdpIdToUser })(AddCDP);
