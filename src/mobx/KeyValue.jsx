import React from 'react';
import {observer} from 'mobx-react';

var KeyValue = observer((dataKey, value) => {
  if (!dataKey && !value) return;
  return (
    <div className="row">
      <div className="col-md-3">{dataKey} :</div>
      <div className="col-md-5">{value}</div>
    </div>
  )
})

KeyValue.propTypes = {
  dataKey: React.PropTypes.string.isRequired,
  value: React.PropTypes.any.isRequired
}

export default KeyValue;
