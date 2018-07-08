import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getLiqPrice, getDaiToWithdraw, getPethToFree } from '../utils/cdp';

class CDPListItem extends Component<Props> {
  props: Props;

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  handleClick = () => {
    this.context.router.history.push(`/cdp/${this.props.id}`);
  };

  render() {
    if (this.props.feedCDP && this.props.feedCDP.loading) {
      return <div>Loading</div>;
    }

    // 2
    if (this.props.feedCDP && this.props.feedCDP.error) {
      return <div>Error</div>;
    }

    // 3
    const {
      feedCDP: {
        getCup: { id, art, ink, ratio, pip, tab }
      }
    } = this.props;
    const liq = getLiqPrice({ pip, ratio });
    const dai = getDaiToWithdraw({ tab, art });
    const peth = getPethToFree({ dai, pip });
    return (
      <tr onClick={this.handleClick} role="presentation">
        <td>{id}</td>
        <td>{art} DAI</td>
        <td>{dai} DAI</td>
        <td>{ink} PETH</td>
        <td>{peth}</td>
        <td>{liq}</td>
      </tr>
    );
  }
}

export const FEED_CDP = gql`
  query feedCDP($id: Int!) {
    getCup(id: $id) {
      art
      block
      deleted
      id
      idx
      guy
      ink
      ire
      lad
      pip
      per
      ratio
      tab
      time
      actions(first: 10) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export default graphql(FEED_CDP, {
  name: 'feedCDP',
  options: ({ id }) => ({ variables: { id: parseInt(id, 10) } })
})(CDPListItem);
