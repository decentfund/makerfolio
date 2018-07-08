// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CDPDetail from '../components/CDPDetail';
import CDPHistory from './CDPHistoryPage';
import { getLiqPrice, getDaiToWithdraw, getPethToFree } from '../utils/cdp';
import { removeCdpIdFromUser } from '../actions/user';

type Props = {
  removeCdpIdFromUser: (cpdId: string) => void,
  feedCDP: {
    loading: boolean,
    error: ?Object,
    getCup?: {
      art: string,
      ink: string,
      ratio: string,
      pip: string,
      tab: string,
      id: number
    }
  },
  match: {
    params: {
      id: string
    }
  }
};

class CDPDetailPage extends Component<Props> {
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

  handleDeleteCdpClick = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.removeCdpIdFromUser(id);
    this.context.router.history.push('/');
  };

  render() {
    if (this.props.feedCDP && this.props.feedCDP.loading) {
      return <div>Loading</div>;
    }

    if (this.props.feedCDP && this.props.feedCDP.error) {
      return <div>Error</div>;
    }

    if (
      this.props.feedCDP.getCup === null ||
      this.props.feedCDP.getCup === undefined
    )
      return <div>Error</div>;

    const { art, ink, ratio, pip, tab, id } = this.props.feedCDP.getCup;
    const liq = getLiqPrice({ pip, ratio });
    const dai = getDaiToWithdraw({ tab, art });
    const peth = getPethToFree({ dai, pip });
    return (
      <div>
        <CDPDetail
          liq={liq}
          art={art}
          ink={ink}
          peth={peth}
          dai={dai}
          id={id}
          onDeleteClick={this.handleDeleteCdpClick}
        />
        <CDPHistory id={id} />
      </div>
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
      actions {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps, { removeCdpIdFromUser })(
  graphql(FEED_CDP, {
    name: 'feedCDP',
    options: ({
      match: {
        params: { id }
      }
    }) => ({ variables: { id: parseInt(id, 10) } })
  })(CDPDetailPage)
);
