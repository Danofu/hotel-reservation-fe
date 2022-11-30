import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, timeout: 30 * 1000 });

type AuthenticateUserResponse = { message: string; token: string };

/**
 * Authenticates a user for the given `email` and `password`. Throws an error if request is invalid.
 *
 * @param email - the email of a user
 * @param password - the password of a user
 * @returns A response from the requested endpoint `/api/auth/login` from a backend.
 *
 * @throws {@link https://github.com/axios/axios/blob/v1.x/index.d.ts#L357 | AxiosError} if request is invalid.
 *
 * @category API
 */
export const authenticateUser = async (email: string, password: string) =>
  axiosInstance.post<AuthenticateUserResponse>('/api/auth/login', { email, password });
