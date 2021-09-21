import httpService from './HttpService';
import { HTTP_METHODS } from 'consts';

const ROUTES = {
  USER: (userId) => `/users/${userId}`,
};

class UserService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  getUser = (id) => {
    return this.httpService.request({
      url: ROUTES.USER(id),
      method: HTTP_METHODS.GET,
    });
  };
}

const userService = new UserService(httpService);

export default userService;
