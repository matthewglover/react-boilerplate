// @flow
import { connect } from 'react-redux';
import { inc, dec } from '../../action_creators';
import Counter from './counter';


type Props = {
  counter: CounterState,
}

const mapStateProps = ({ counter }: AppState): Props =>
  ({ counter });


const connector =
  connect(mapStateProps, { inc, dec });


export default connector(Counter);
