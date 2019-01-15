import axios from 'axios';

class HttpRequest {
  
  constructor() {
    let instance = axios.create({
      timeout: 5000,
      headers: {},
    });
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    console.log('##### HttpRequest response : ', response);
    return response;
  }

  handleError = (error) => {        
    return Promise.reject(error);
  }

  request(config) {
    console.log('##### HttpRequest request config : ', config);
    return this.instance.request(config);
  }

}

export default new HttpRequest();