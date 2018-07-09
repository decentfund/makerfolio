// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import CDPHistoryRecord from './CDPHistoryRecord';

// eslint-disable-next-line prefer-destructuring
const shell = require('electron').shell;

type Props = {
  actions: Array<{
    act: 'OPEN' | 'WIPE' | 'DRAW' | 'FREE' | 'LOCK' | 'SHUT',
    arg: ?string,
    time: string,
    pip: string,
    tx: string
  }>
};

const StyledHeader = styled.div`
  display: flex;
  font-size: 12px;
  text-transform: uppercase;
`;

const StyledDateHeader = styled.div`
  width: 100px;
`;

const StyledActionHeader = styled.div`
  width: 250px;
`;

const StyledRateHeader = styled.div`
  margin-right: 30px;
`;

const StyledMarginHeader = styled.div`
  margin-right: 30px;
`;

const StyledSumHeader = styled.div`
  margin-right: 30px;
`;

const Draw = styled.span`
  color: #339058;
`;

const Wipe = styled.span`
  color: #3c84ad;
`;

const Free = styled.span`
  color: #9a6fa5;
`;

const getLink = tx => `https://etherscan.io/tx/${tx}`;

const StyledContainer = styled.div`
  margin: 35px 26px;
`;

export default class CDPHistory extends Component<Props> {
  props: Props;

  handleTxClick = (event: any, tx: string) => {
    event.preventDefault();
    shell.openExternal(getLink(tx));
  };

  render() {
    return (
      <StyledContainer>
        <StyledHeader>
          <StyledDateHeader>Date</StyledDateHeader>
          <StyledActionHeader>
            DAI <Draw>DRAW</Draw> / <Wipe>WIPE</Wipe> / PETH LOCK /{' '}
            <Free>FREE</Free>
          </StyledActionHeader>
          <StyledRateHeader>USD/ETH</StyledRateHeader>
          <StyledMarginHeader>Margin</StyledMarginHeader>
          <StyledSumHeader>Sum, USD</StyledSumHeader>
        </StyledHeader>
        {this.props.actions
          .filter(
            a => ['OPEN', 'WIPE', 'DRAW', 'FREE', 'LOCK'].indexOf(a.act) >= 0
          )
          .map(action => (
            <CDPHistoryRecord
              action={action}
              key={action.tx}
              onTxClick={this.handleTxClick}
            />
          ))}
      </StyledContainer>
    );
  }
}
