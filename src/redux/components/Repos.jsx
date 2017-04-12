import React from 'react';
import KeyValue from './KeyValue';

const Repos = ({repos}) => (
  <div>
    <h2>Repositories:</h2>
    <div className="row">
      <div className="col-md-3">Repo's name</div>
      <div className="col-md-5">Repo's Url</div>
    </div>
    {
      repos.map(function (repo) {
        return (
          <KeyValue key={repo.id} dataKey={repo.name} value={repo.url} />
        )
      })
    }
  </div>
)

export default Repos;
