/**
 * Array that contains {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage | local} and {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage | session} storages.
 *
 * @category Storage
 */
export const storages = [localStorage, sessionStorage];

/**
 * Searches for the storage item by the given `key` in the array of {@link storages}.
 *
 * @param key - the storage item key you want to retrieve the value of
 * @returns The value of the `key`. If the `key` doesn't exist, `null` is returned.
 *
 * @category Storage
 * @remarks The utility returns the value from the first storage that contains the `key`.
 */
export const getStorageItem = (key: string) => storages.find((storage) => !!storage.getItem(key))?.getItem(key);

/**
 * Removes the item from the array of {@link storages} by the specified `key`
 *
 * @param key - the key you want to remove
 *
 * @category Storage
 */
export const removeStorageItem = (key: string) => storages.forEach((storage) => storage.removeItem(key));
