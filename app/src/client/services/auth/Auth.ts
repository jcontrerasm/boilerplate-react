import axios from 'axios';

import { IAuthentication } from './models/Authentication';

interface IAuthService {
  login(): Promise<IAuthentication>;
}

class AuthService implements IAuthService {

  baseUrl = 'http://localhost:8000';

  public async login() {
    try {
      const { data } = await axios.get(`${this.baseUrl}/authentication`);
      if (data.status === 200) {
        return data.data;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

export default new AuthService();
