// @flow
import { connect } from 'react-redux';
import { inc, dec } from '../../action_creators';
import Counter from './counter';


type CounterState = {
  counter: number,
};

const mapStateProps = ({ counter }: AppState): CounterState =>
  ({ counter });


const connector =
  connect(mapStateProps, { inc, dec });


export default connector(Counter);
