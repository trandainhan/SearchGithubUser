import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import Repo from './Repo.js';
import KeyValue from './KeyValue.jsx';
import $ from 'jquery';

@observer class Repos extends React.Component {

  @observable repos = []
  
  componentDidMount() {
    $.get(this.props.url, function(data) {
      var repos = data.map(function(item) {
        return new Repo(item);
      });
      this.repos = repos;
    }.bind(this))
  }
  
  render() {
    return (
      <div>
        <h2>Repositories:</h2>
        <div className="row">
          <div className="col-md-3">Repo's name</div>
          <div className="col-md-5">Repo's Url</div>
        </div>
        {
          this.repos.map(function (repo) {
            return (
              <KeyValue key={repo.id} dataKey={repo.name} value={repo.url} />
            )
          })
        }
      </div>
    )
  }
}

Repos.propTypes = {
  url: React.PropTypes.string.isRequired
}
 
export default Repos;