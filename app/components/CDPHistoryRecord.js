import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { markMargin, changePrice } from '../actions/transactions';

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

const renderSum = (action, transaction) => {
  if (['DRAW', 'WIPE'].indexOf(action.act) >= 0) return action.arg;

  if (action.act === 'LOCK')
    return parseFloat(transaction.price || action.arg) * parseFloat(action.pip);

  return parseFloat(action.arg) * parseFloat(action.pip) || '';
};

const CDPHistoryRecord = ({
  action,
  transaction,
  markMargin, // eslint-disable-line no-shadow
  onTxClick,
  changePrice // eslint-disable-line no-shadow
}: Props) => (
  <tr>
    <td>
      <a
        href={getLink(action.tx)}
        onClick={event => onTxClick(event, action.tx)}
      >
        {moment(action.time).format('DD-MM-YYYY HH:mm')}
      </a>
    </td>
    <td>{action.act}</td>
    <td>{action.arg}</td>
    <td>
      {action.act !== 'LOCK' ? (
        action.pip
      ) : (
        <input
          value={transaction.price}
          placeholder={action.pip}
          onChange={event => changePrice(action.tx, event.target.value)}
        />
      )}{' '}
      USD
    </td>
    <td>{renderSum(action, transaction)}</td>
    <td>
      {action.act === 'LOCK' ? (
        <input
          type="checkbox"
          checked={transaction.margin}
          onClick={() => markMargin(action.tx)}
        />
      ) : null}
    </td>
  </tr>
);

const mapStateToProps = (state, { action }) => ({
  transaction: state.transactions[action.tx] || {}
});

export default connect(mapStateToProps, { markMargin, changePrice })(
  CDPHistoryRecord
);
