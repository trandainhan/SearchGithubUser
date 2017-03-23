import React from 'react';

var KeyValue = function(props) {
  if (!props.dataKey && !props.value) return;
  return (
    <div className="row">
      <div className="col-md-3">{props.dataKey} :</div>
      <div className="col-md-5">{props.value}</div>
    </div>
  )
}
KeyValue.propTypes = {
  dataKey: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
}

export default KeyValue;