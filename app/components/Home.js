// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import CDPListItem from './CDPListItem';

type Props = {
  cdpIds: Array<string>
};

class Home extends Component<Props> {
  props: Props;

  render() {
    const { cdpIds } = this.props;

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home hello</h2>
          <Link to="/addCDP">Add CPD</Link>
          <br />
          <Link to="/cdpHistory">CDP History</Link>
          <br />
          <Link to="/counter">to Counter</Link>
          <br />
          <Link to="/graphql">to GraphQL</Link>
          {cdpIds.map(id => <CDPListItem id={id} key={id} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cdpIds: state.user
});

export default connect(mapStateToProps)(Home);
