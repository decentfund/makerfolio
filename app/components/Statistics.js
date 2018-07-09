import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../utils/cdp';

type Props = {
  lockCap: number,
  lockCapByTime: number,
  margin: number,
  freePrice: number,
  profit: number,
  style: Object
};

const StyledHeader = styled.header`
  line-height: 14px;
  font-size: 12px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 14px;
`;

const StyledBlockHeader = styled.div`
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 7px;
`;

const StyledBlock = styled.div`
  margin-bottom: 25px;
`;

const StyledValue = styled.div`
  font-size: 18px;
`;

const StyledCompare = styled.div`
  display: flex;
`;

const StyledColumn = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

const Statistics = ({
  lockCap,
  lockCapByTime,
  margin,
  freePrice,
  profit,
  style
}: Props) => (
  <div style={{ width: 330, ...style }}>
    <StyledHeader>Performance</StyledHeader>
    <StyledBlock>
      <StyledBlockHeader>Locked PETH price, USD</StyledBlockHeader>
      <StyledCompare>
        <StyledColumn>
          <div>current</div>
          <StyledValue>{formatCurrency(lockCap, 'USD', 4)}</StyledValue>
        </StyledColumn>
        <StyledColumn>
          <div>at lock time</div>
          <StyledValue>{formatCurrency(lockCapByTime, 'USD', 4)}</StyledValue>
        </StyledColumn>
      </StyledCompare>
    </StyledBlock>
    <StyledBlock>
      <StyledBlockHeader>Margin performance</StyledBlockHeader>
      <StyledCompare>
        <StyledColumn>
          <div>PETH reinvested</div>
          <StyledValue>{formatCurrency(margin, 'ETH')}</StyledValue>
        </StyledColumn>
        <StyledColumn>
          <div>USD/ETH break even point</div>
          <StyledValue>{formatCurrency(freePrice, 'USD', 4)}</StyledValue>
        </StyledColumn>
      </StyledCompare>
    </StyledBlock>
    <StyledBlock>
      <div>Total performance, USD</div>
      <StyledValue>{formatCurrency(profit, 'USD', 4)}</StyledValue>
    </StyledBlock>
  </div>
);

export default Statistics;
