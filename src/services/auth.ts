import {api} from './api';

import {RegisterRequest, RegisterResponse} from './interfaces/auth';

export const AuthServices = {
  register: async ({data}: {data: RegisterRequest}) => {
    const res = await api.post<RegisterResponse>('/user/register', {
      ...data,
    });

    return res.data;
  }
}