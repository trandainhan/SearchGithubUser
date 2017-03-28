import React from 'react';
import { observer } from 'mobx-react';
import KeyValue from './KeyValue.jsx';
import { compose, withProps, lifecycle, mapProps, setPropTypes } from 'recompose';
import ReposStore from './store/ReposStore';

const enhancer = compose(
  setPropTypes({
    url: React.PropTypes.string.isRequired
  }),
  withProps(() => ({
    store: new ReposStore()
  })),
  lifecycle({
    componentDidMount() {
      this.props.store.fetchRepo(this.props.url)
    }
  }),
  mapProps(({store}) => ({
    repos: store.repos
  })),
  observer
)

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

export default enhancer(Repos);
