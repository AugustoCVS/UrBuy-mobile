import {api} from './api';

import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse, IUser, UpdateUserInfoRequest } from './interfaces/auth';

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
  },

  getUserInfo: async ({userId}: {userId: number}) => {
    const res = await api.get<IUser>(`/user/${userId}`);

    return res.data;
  },

  updateUserInfo: async ({userId, data}: {userId: number, data: UpdateUserInfoRequest}) => {
    const res = await api.put<IUser>(`/user/${userId}`, {
      ...data
    });
    
    return res.data;
  }
}