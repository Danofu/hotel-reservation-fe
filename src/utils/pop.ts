import get from 'lodash/get';
import unset from 'lodash/unset';

export default <TObject, TPath extends string>(data: TObject, path: TPath) => {
  const value = get(data, path);
  unset(data, path);
  return value;
};
