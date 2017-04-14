import React from 'react'
import KeyValue from '../components/KeyValue'
import { connect } from 'react-redux'
import { lifecycle, setPropTypes, compose } from 'recompose'
import { fetchRepos } from '../actions'

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

const enhancer = compose(
  setPropTypes({
    url: React.PropTypes.string.isRequired
  }),
  connect((state) => ({
    repos: state.selectedRepos
  })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(fetchRepos(this.props.url))
    }
  })
)

export default enhancer(Repos)
