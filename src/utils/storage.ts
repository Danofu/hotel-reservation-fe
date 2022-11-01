const storages = [localStorage, sessionStorage];

export const getStorageItem = (key: string) => storages.find((storage) => !!storage.getItem(key))?.getItem(key);

export const removeStorageItem = (key: string) => storages.forEach((storage) => storage.removeItem(key));
