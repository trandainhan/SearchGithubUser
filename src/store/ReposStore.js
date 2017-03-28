import { observable, action } from 'mobx';
import fetch from 'axios';
import Repo from '../Repo.js';

class ReposStore {
  @observable repos = []

  constructor(data) {
    data = data || {};
    this.repos = data.repos || [];
  }

  @action fetchRepo (url) {
    return fetch.get(url).then(({data}) => {
      var repos = data.map(item => {
        return new Repo(item);
      });
      this.repos.replace(repos);
    })
  }

}

export default ReposStore
