import { get, GetFieldType, unset } from 'lodash';

/**
 * The utility that gets the property value at `path` of `data` object and deletes the property from the `data` object.
 *
 * @template TObject, TPath
 * @param data - the object to query
 * @typeParam TObject - type of the `data` param
 * @param path - the path of the property to get
 * @typeParam TPath - type of the `path` param
 * @returns Resolved value.
 *
 * @category Functions
 * @group Utils
 * @remarks The utility uses the external library {@link https://lodash.com | lodash}, specifically the {@link https://lodash.com/docs/4.17.15#get | get} and {@link https://lodash.com/docs/4.17.15#unset | unset} functions.
 */
export default <TObject, TPath extends string>(data: TObject, path: TPath): GetFieldType<TObject, TPath> => {
  const value = get(data, path);
  unset(data, path);
  return value;
};
