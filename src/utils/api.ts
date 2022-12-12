import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, timeout: 30 * 1000 });

type AuthenticateUserResponse = { message: string; token: string };

/**
 * The arguments type of the utility function {@link registerUser}.
 *
 * @category API
 */
export type RegisterUserArgs = {
  /** the email of the user */
  email: string;
  /** the family name of the user */
  familyName: string;
  /** the given name of the user */
  givenName: string;
  /** the password of the user */
  password: string;
};
type RegisterUserResponse = { message: string };

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

/**
 * Registers the user with the given data. Throws an error if request is invalid.
 *
 * @param registerData - the data to register the user
 *
 * @throws {@link https://github.com/axios/axios/blob/v1.x/index.d.ts#L357 | AxiosError} if request is invalid.
 *
 * @category API
 */
export const registerUser = async ({ email, familyName, givenName, password }: RegisterUserArgs) =>
  axiosInstance.post<RegisterUserResponse>('/api/auth/registration', {
    email,
    first_name: givenName,
    last_name: familyName,
    password,
  });
