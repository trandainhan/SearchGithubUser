import React from 'react';

var Repos = React.createClass({
  
  propTypes: {
    url: React.PropTypes.string.isRequired
  },
  
  getInitialState: function () {
    return {
      repos: []
    }
  },
  
  componentDidMount: function () {
    $.get(this.props.url, function(data) {
      var repos = data.map(function(item) {
        return new Repo(item);
      });
      this.setState({
        repos: repos
      })
    }.bind(this))
  },
  
  render: function () {
    return (
      <div>
        <h2>Repositories:</h2>
        <div className="row">
          <div className="col-md-3">Repo's name</div>
          <div className="col-md-5">Repo's Url</div>
        </div>
        {
          this.state.repos.map(function (repo) {
            return (
              <KeyValue key={repo.id} dataKey={repo.name} value={repo.url} />
            )
          })
        }
      </div>
    )
  }
})

export default Repos;