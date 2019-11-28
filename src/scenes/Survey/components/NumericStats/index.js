import React from 'react';
import Skeleton from 'react-loading-skeleton';

function NumericStats({data}) {
  return (
    <div className="row">
      <div className="col-md">
        <strong>{data.label || <Skeleton width={400} /> }</strong><br />
        <strong style={{fontSize: "30px"}}>{Math.round(data.result) || <Skeleton width={100} />}</strong>
        <hr />
      </div>
    </div>
  );
}

export default NumericStats;