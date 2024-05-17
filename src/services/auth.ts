import {api} from './api';

import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse } from './interfaces/auth';

export const AuthServices = {
  register: async ({data}: {data: RegisterRequest}) => {
    const res = await api.post<RegisterResponse>('/user/register', {
      ...data,
    });

    return res.data;
  },

  login: async ({data}: {data: LoginRequest}) => {
    const res = await api.post<LoginResponse>('/user/login', {
      ...data
    })

    return res.data
  }
}