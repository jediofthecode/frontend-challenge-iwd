import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import {getPrettyDate} from 'utils/date';

function DateStats({data}) {
  return (
    <div className="row">
      <div className="col-md">
        <p><strong>{data.label || <Skeleton width={400} />}</strong></p>
        { (data.result || []).map((r, i) => {
          let date = new Date(r);
          return (
            <p key={`date-stat-${i}`}>
              {getPrettyDate(date)}
            </p>
          );
        }) }
      </div>
    </div>
  );
}

DateStats.propTypes = {
  data: PropTypes.object
};

export default DateStats;