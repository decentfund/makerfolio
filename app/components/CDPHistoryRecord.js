import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { markMargin, changePrice } from '../actions/transactions';
import { formatCurrency } from '../utils/cdp';

const getLink = tx => `https://etherscan.io/tx/${tx}`;

type Props = {
  action: {
    act: 'OPEN' | 'WIPE' | 'DRAW' | 'FREE' | 'LOCK' | 'SHUT',
    arg: ?string,
    time: string,
    pip: string,
    tx: string
  },
  transaction: {
    margin?: boolean
  },
  markMargin: (tx: string) => void,
  changePrice: (tx: string, value: string) => void,
  onTxClick: (event: any, tx: string) => *
};

const StyledContainer = styled.div`
  display: flex;
  line-height: 34px;
  align-items: center;
`;

const StyledDate = styled.div`
  width: 164px;
`;

const StyledAction = styled.div`
  width: 175px;
  text-align: center;
`;

const StyledRate = styled.div`
  width: 82px;
`;

const StyledMargin = styled.div`
  width: 66px;
  text-align: center;
  margin-right: 20px;
  line-heght: 34px;
`;

const renderSum = (action, transaction) => {
  if (['DRAW', 'WIPE'].indexOf(action.act) >= 0) return action.arg;

  if (action.act === 'LOCK') {
    return parseFloat(action.arg) * parseFloat(transaction.price || action.pip);
  }

  return parseFloat(action.arg) * parseFloat(action.pip) || '';
};

const StyledType = styled.div`
  min-width: 17px;
  width: 17px;
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  flex-basis: 0;
  margin: 0 4px;
`;

const StyledActionValue = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const Wipe = StyledType.extend`
  background: #3c84ad;
`;

const Draw = StyledType.extend`
  background: #339058;
`;

const Free = StyledType.extend`
  background: #9a6fa5;
`;

const Lock = StyledType.extend`
  background: #000;
`;

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 4px;
  width: 130px;
  height: 28px;
  padding: 0 9px;
  font-size: 14px;
`;

const StyledSum = styled.div`
  text-align: right;
`;

const ActionComponents = {
  WIPE: Wipe,
  DRAW: Draw,
  FREE: Free,
  LOCK: Lock
};

const getActionLabel = action => {
  const Component = ActionComponents[action.act];
  return <Component>{action.act.substring(0, 1)}</Component>;
};

const renderAction = action => {
  if (action.act === 'OPEN') return 'CDP OPEN';

  if (['LOCK', 'WIPE'].indexOf(action.act) >= 0) {
    return (
      <div style={{ display: 'flex', width: '100%', 'align-items': 'center' }}>
        <StyledActionValue
          style={{
            'text-align': 'right'
          }}
        >
          {formatCurrency(action.arg, action.act === 'LOCK' ? 'ETH' : 'DAI')}
        </StyledActionValue>
        {getActionLabel(action)}
        <StyledActionValue />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', width: '100%', 'align-items': 'center' }}>
      <StyledActionValue />
      {getActionLabel(action)}
      <StyledActionValue
        style={{
          'text-align': 'left'
        }}
      >
        {formatCurrency(action.arg, action.act === 'DRAW' ? 'DAI' : 'ETH')}
      </StyledActionValue>
    </div>
  );
};

const CDPHistoryRecord = ({
  action,
  transaction,
  markMargin, // eslint-disable-line no-shadow
  onTxClick,
  changePrice // eslint-disable-line no-shadow
}: Props) => (
  <StyledContainer>
    <StyledDate>
      <a
        href={getLink(action.tx)}
        onClick={event => onTxClick(event, action.tx)}
      >
        {moment(action.time).format('DD-MM-YYYY HH:mm')}
      </a>
    </StyledDate>
    <StyledAction>{renderAction(action)}</StyledAction>
    <StyledRate>
      {action.act !== 'LOCK' ? (
        <div style={{ padding: '0 10px' }}>{action.pip}</div>
      ) : (
        <StyledInput
          value={transaction.price}
          placeholder={action.pip}
          onChange={event => changePrice(action.tx, event.target.value)}
        />
      )}{' '}
    </StyledRate>
    <StyledMargin>
      {action.act === 'LOCK' ? (
        <input
          type="checkbox"
          checked={transaction.margin}
          onClick={() => markMargin(action.tx)}
        />
      ) : null}
    </StyledMargin>
    <StyledSum>
      {formatCurrency(renderSum(action, transaction), 'USD', 4)}
    </StyledSum>
  </StyledContainer>
);

const mapStateToProps = (state, { action }) => ({
  transaction: state.transactions[action.tx] || {}
});

export default connect(mapStateToProps, { markMargin, changePrice })(
  CDPHistoryRecord
);
