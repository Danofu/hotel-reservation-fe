import get from 'lodash/get';
import unset from 'lodash/unset';

// returns a value of the "data" in the specified "path" and deletes the "path" from the "data"
export default <TObject, TPath extends string>(data: TObject, path: TPath) => {
  const value = get(data, path);
  unset(data, path);
  return value;
};
