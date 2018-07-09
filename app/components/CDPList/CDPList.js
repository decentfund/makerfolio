// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CDPListItem from './CDPListItem';
import {
  CDPHeader,
  OtherHeaders,
  CDPHeaderContainer,
  CDPHeaderGroup,
  Label,
  Currency
} from './CDPListStyles';

class CDPList extends Component<Props> {
  render() {
    const { cdpIds } = this.props;
    return (
      <div>
        <CDPHeaderContainer>
          <CDPHeader>CDP</CDPHeader>
          <CDPHeaderGroup>
            <OtherHeaders>
              <Label>debt</Label>
              <Currency>DAI</Currency>
            </OtherHeaders>
            <OtherHeaders>
              <Label>max draw</Label>
              <Currency>DAI</Currency>
            </OtherHeaders>
          </CDPHeaderGroup>
          <CDPHeaderGroup>
            <OtherHeaders>
              <Label>locked</Label>
              <Currency>PETH</Currency>
            </OtherHeaders>
            <OtherHeaders>
              <Label>max free</Label>
              <Currency>PETH</Currency>
            </OtherHeaders>
          </CDPHeaderGroup>
          <OtherHeaders>
            <Label>LP</Label>
            <Currency>USD/ETH</Currency>
          </OtherHeaders>
        </CDPHeaderContainer>
        {cdpIds.map(id => <CDPListItem id={id} key={id} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cdpIds: state.user
});

export default withRouter(connect(mapStateToProps)(CDPList));
