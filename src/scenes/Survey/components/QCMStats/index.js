import React from 'react';
import Skeleton from 'react-loading-skeleton';
import sum from 'lodash/sum';
import sortBy from 'lodash/sortBy';
import each from 'lodash/each';
import PropTypes from 'prop-types';

function QCMStats({ data }) {
  let total = sum(Object.values(data.result || {}));

  // here we will do some work to sort out the qcm values in descending order
  // the expected data format isn't easily sortable, so we'll convert it
  // into an array of objects for easier sorting
  let sortable = [];
  each(Object.keys(data.result || {}), (o) => {
    sortable.push({name: o, value: data.result[o]});
  })

  sortable = sortBy(sortable, (o) => -o.value);

  return (
    <div className="row">
      <div className="col-md">
        <h6>{data.label || <Skeleton width={400} />}</h6>
        { (sortable).map((r, i) => (
          <div key={`qcm-stat-${i}`}>
            <strong>{r.name}</strong>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: `${Math.round((r.value / total) * 100)}%`, fontWeight: 'bold'}}>{r.value}/{total}</div>
            </div>
          </div>
        )) }
        <hr />
      </div>
    </div>
  );
}

QCMStats.propTypes = {
  data: PropTypes.object
};

export default QCMStats;