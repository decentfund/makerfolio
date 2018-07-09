import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import SVGInline from 'react-svg-inline';
import gql from 'graphql-tag';
import { Route } from 'react-router';
import {
  getLiqPrice,
  getDaiToWithdraw,
  getPethToFree,
  formatCurrency
} from '../../utils/cdp';
import {
  CDPId,
  Column,
  CDPHeaderGroup,
  ListItem,
  WarnMe,
  SyledInput,
  DropsBelowOrRaisedAbove
} from './CDPListStyles';
import CDPDetail from '../../containers/CDPDetailPage';

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
    const svgIconHiglight =
      '<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4H5V1.5C5 0.671574 5.67163 0 6.5 0C7.32837 0 8 0.671574 8 1.5V4H7C9.76147 4 12 6.23858 12 9V14C12.5522 14 13 14.4477 13 15C13 15.5523 12.5522 16 12 16H1C0.447754 16 0 15.5523 0 15C0 14.4477 0.447754 14 1 14V9C1 6.23858 3.23853 4 6 4ZM7 17H11V18C11 19.1046 10.1045 20 9 20C7.89551 20 7 19.1046 7 18V17Z" fill="#FCE594"/></svg>';
    const svgIconDull =
      '<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4H5V1.5C5 0.671574 5.67163 0 6.5 0C7.32837 0 8 0.671574 8 1.5V4H7C9.76147 4 12 6.23858 12 9V14C12.5522 14 13 14.4477 13 15C13 15.5523 12.5522 16 12 16H1C0.447754 16 0 15.5523 0 15C0 14.4477 0.447754 14 1 14V9C1 6.23858 3.23853 4 6 4ZM7 17H11V18C11 19.1046 10.1045 20 9 20C7.89551 20 7 19.1046 7 18V17Z" fill="black" fill-opacity="0.2"/></svg>';
    return (
      <div>
        <ListItem onClick={this.handleClick} role="presentation">
          <CDPId>{id}</CDPId>
          <CDPHeaderGroup>
            <Column>{formatCurrency(art, 'DAI')}</Column>
            <Column className="light">{formatCurrency(dai, 'DAI')}</Column>
          </CDPHeaderGroup>
          <CDPHeaderGroup>
            <Column>{formatCurrency(ink, 'ETH')}</Column>
            <Column className="light">{formatCurrency(peth, 'ETH')}</Column>
          </CDPHeaderGroup>
          <Column>{formatCurrency(liq, 'USD')}</Column>
          <Column>
            <SVGInline svg={svgIconDull || svgIconHiglight} />
          </Column>
          <Column>
            <WarnMe>warn me when LP</WarnMe>
          </Column>
          <Column style={{ marginLeft: '20px', marginRight: '20px' }}>
            <DropsBelowOrRaisedAbove>
              drops below&nbsp;&nbsp;
            </DropsBelowOrRaisedAbove>
          </Column>
          <Column>
            <SyledInput type="text" />
          </Column>
        </ListItem>
        <Route
          path="/cdp/:id"
          render={props => {
            if (id === parseInt(props.match.params.id, 10))
              return <CDPDetail {...props} />;
            return null;
          }}
        />
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
  options: ({ id }) => ({
    variables: { id: parseInt(id, 10) },
    pollInterval: 3000
  })
})(CDPListItem);
