const storages = [localStorage, sessionStorage];

export const getStorageItem = (key: string) => {
  const storage = storages.find((storage) => !!storage.getItem(key));
  return storage?.getItem(key);
};

export const removeStorageItem = (key: string) => storages.forEach((storage) => storage.removeItem(key));
