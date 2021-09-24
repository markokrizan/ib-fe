import httpService from './HttpService';
import { HTTP_METHODS } from 'consts';

const ROUTES = {
  USERS: '/users',
  USER: (userId) => `/users/${userId}`,
};

class UserService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  getUsers = () => {
    return this.httpService.request({
      url: ROUTES.USERS,
      method: HTTP_METHODS.GET,
    });
  };

  getUser = (id) => {
    return this.httpService.request({
      url: ROUTES.USER(id),
      method: HTTP_METHODS.GET,
    });
  };

  updateUser = (user) => {
    return this.httpService.request({
      url: ROUTES.USERS,
      method: HTTP_METHODS.POST,
      data: user,
    });
  };
}

const userService = new UserService(httpService);

export default userService;
