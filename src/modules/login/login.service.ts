import { TLogin } from './login.interface';

const createLogin = async (loginData: TLogin) => {
  if (loginData?.email === 'sha@gmail.com' && loginData?.password === '12345') {
    const result = {
      email: 'sha@gmail.com',
      password: '12345',
    };
    return result;
  } else {
    throw new Error('You gmail or password are not matched');
  }
};

export const loginService = {
  createLogin,
};
