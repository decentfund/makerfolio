// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CDPListItem from './CDPListItem';
import styles from './Home.css';
import { CDPHeader, OtherHeaders } from './CDPListStyles';

class CDPList extends Component<Props> {
  render() {
    const { cdpIds } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div data-tid="history">
          <br />
          <br />
          <br />
          <br />
          <table>
            <thead>
              <CDPHeader>cdp</CDPHeader>
              <OtherHeaders>debt</OtherHeaders>
              <OtherHeaders>max draw</OtherHeaders>
              <OtherHeaders>locked</OtherHeaders>
              <OtherHeaders>max free</OtherHeaders>
              <OtherHeaders>LP</OtherHeaders>
            </thead>
            <tbody>{cdpIds.map(id => <CDPListItem id={id} key={id} />)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cdpIds: state.user
});

export default connect(mapStateToProps)(CDPList);
