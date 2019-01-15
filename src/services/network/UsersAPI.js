import HttpRequest from '../HttpRequest';

class UsersAPI {

  constructor() {
    const baseURL = 'https://reqres.in/api';
    this.baseURL = baseURL;
  }

  findAll = (_config) => {
    let config = Object.assign( {}, _config, {   
      'method': 'get',
      'url' : '/users?per_page=6',
      'baseURL' : this.baseURL,
    });
    return HttpRequest.request(config);
  }
  
  read = (_config, id) => {
    let config = Object.assign( {}, _config, {   
      'method': 'get',
      'url' : '/users/' + id,
      'baseURL' : this.baseURL,
    });
    return HttpRequest.request(config);
  }

  delete = (_config, id) => {
    let config = Object.assign( {}, _config, {   
      'method': 'delete',
      'url' : '/users/' + id,
      'baseURL' : this.baseURL,
    });
    return HttpRequest.request(config);
  }

  create = (_config, payload) => {
    let config = Object.assign( {}, _config, {   
      'method': 'post',
      'url' : '/users',
      'baseURL' : this.baseURL,
      'data': payload,
      'config': { headers: {'Content-Type': 'application/json' }}
    
    });
    return HttpRequest.request(config);
  }

  update = (_config, id, payload) => {
    let config = Object.assign( {}, _config, {   
      'method': 'put',
      'url' : '/users/' + id,
      'baseURL' : this.baseURL,
      'data': payload,
      'config': { headers: {'Content-Type': 'application/json' }}
    
    });
    return HttpRequest.request(config);
  }


}

export default new UsersAPI();