import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { markMargin } from '../actions/transactions';

const getLink = tx => `https://etherscan.io/tx/${tx}`;

type Props = {
  action: {
    act: 'OPEN' | 'WIPE' | 'DRAW' | 'FREE' | 'LOCK' | 'SHUT',
    arg: string,
    time: string,
    pip: string,
    tx: string
  },
  transaction: {
    margin?: boolean
  },
  markMargin: (tx: string) => void,
  onTxClick: (event: any, tx: string) => *
};

const CDPHistoryRecord = ({
  action,
  transaction,
  markMargin, // eslint-disable-line no-shadow
  onTxClick
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
    <td>{action.pip} USD</td>
    <td>
      {['DRAW', 'WIPE'].indexOf(action.act) >= 0
        ? action.arg
        : parseFloat(action.arg) * parseFloat(action.pip)}
    </td>
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

export default connect(mapStateToProps, { markMargin })(CDPHistoryRecord);
