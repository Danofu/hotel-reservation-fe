/**
 * The application global declarations.
 * @module Globals
 */
import axios from 'axios';

/**
 * The text logo of the application.
 * @category Logo
 */
export const LOGO_TEXT_LONG = 'Hotels and Booking';
/**
 * The abbreviated text logo of the application.
 * @category Logo
 */
export const LOGO_TEXT_SHORT = 'H&B';

/**
 * The URL path name to the home "page".
 * @category URLs
 */
export const PATHNAME_HOME = '/home';
/**
 * The URL path name to the login "page".
 * @category URLs
 */
export const PATHNAME_LOGIN = '/authentication';
/**
 * The URL path name to the protected "page".
 * @category URLs
 */
export const PATHNAME_PROTECTED = '/protected';
/**
 * The URL path name to the registration "page".
 * @category URLs
 */
export const PATHNAME_REGISTRATION = '/registration';
/**
 * The URL path name to reservations "page".
 * @category URLs
 */
export const PATHNAME_RESERVATIONS = '/reservations';

/**
 * The storage item key name for cashing an application color mode.
 * @category Storage
 */
export const STORAGE_APP_COLOR_MODE = 'app.color-mode';
/**
 * The storage item key name for cashing an application language key.
 * @category Storage
 */
export const STORAGE_APP_LANGUAGE = 'app.language';
/**
 * The storage item key name for cashing a user authorization token.
 * @category Storage
 */
export const STORAGE_USER_TOKEN = 'user.auth-token';

/**
 * The utility type that helps to make type object properties optional.
 *
 * @typeParam T - the object type in which optional properties be made
 * @typeParam K - the properties that will be optional in the object
 */
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * The instance of {@link https://axios-http.com/docs/intro | axios} with the main API base URL.
 * @category Axios
 */
export const AXIOS_MAIN_INSTANCE = axios.create({ baseURL: process.env.REACT_APP_API_URL, timeout: 30 * 1000 });
