import { AXIOS_MAIN_INSTANCE } from 'app-globals';

/**
 * The arguments type of the utility function {@link registerUser}.
 *
 * @category API
 */
export type RegisterUserData = {
  /** the email of the user */
  email: string;
  /** the family name of the user */
  familyName: string;
  /** the given name of the user */
  givenName: string;
  /** the password of the user */
  password: string;
};

/**
 * The arguments type of the utility function {@link createRoomReservation}
 *
 * @category API
 */
export type CreateRoomReservationData = {
  /** the check-in date of the reservation */
  checkInDate: string;
  /** the check-out date of the reservation */
  checkOutDate: string;
  /** meals of the reservation */
  meals?: number[];
  /** the id of the room */
  roomId: number;
  /** the id of the user */
  userId: number;
};

/**
 * Authenticates a user for the given `email` and `password`. Throws an error if request is invalid.
 *
 * @param email - the email of a user
 * @param password - the password of a user
 *
 * @returns A response from the requested endpoint `POST: /api/auth/login` from a backend.
 * @throws {@link https://github.com/axios/axios/blob/v1.x/index.d.ts#L357 | AxiosError} if request is invalid.
 *
 * @category API
 */
export const authenticateUser = async (email: string, password: string) =>
  AXIOS_MAIN_INSTANCE.post<{ message: string; token: string }>('/api/auth/login', { email, password });

/**
 * Registers the user with the given data. Throws an error if request is invalid.
 *
 * @param registerData - the data to register the user
 *
 * @returns A response from the requested endpoint `POST: /api/auth/registration` from a backend.
 * @throws {@link https://github.com/axios/axios/blob/v1.x/index.d.ts#L357 | AxiosError} if request is invalid.
 *
 * @category API
 */
export const registerUser = async ({ email, familyName, givenName, password }: RegisterUserData) =>
  AXIOS_MAIN_INSTANCE.post<{ message: string }>('/api/auth/registration', {
    email,
    first_name: givenName,
    last_name: familyName,
    password,
  });

/**
 * Reserve the room for the user for the given period of time. Throws an error if request is invalid.
 *
 * @param reservationData - the data to reserve the room for the user
 *
 * @returns A response from the requested endpoint `POST: /api/rezerwacja` from a backend.
 * @throws {@link https://github.com/axios/axios/blob/v1.x/index.d.ts#L357 | AxiosError} if request is invalid.
 *
 * @category API
 */
export const createRoomReservation = async ({
  checkInDate,
  checkOutDate,
  meals,
  roomId,
  userId,
}: CreateRoomReservationData) =>
  AXIOS_MAIN_INSTANCE.post<{ message: string }>('/api/rezerwacja', {
    check_in: checkInDate,
    check_out: checkOutDate,
    id_pokoj: roomId,
    id_user: userId,
    menu: meals,
  });
