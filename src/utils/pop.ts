import { get, GetFieldType, unset } from 'lodash';

/**
 * The utility that gets the property value at `path` of `data` object and deletes the property from the `data` object.
 *
 * @template TObject, TPath
 * @typeParam TObject - type of the `data` param
 * @typeParam TPath - type of the `path` param
 * @param data - the object to query
 * @param path - the path of the property to get
 * @returns Resolved value.
 *
 * @category Pop
 * @remarks The utility uses the external library {@link https://lodash.com | lodash}, specifically the {@link https://lodash.com/docs/4.17.15#get | get} and {@link https://lodash.com/docs/4.17.15#unset | unset} functions.
 */
export const pop = <TObject, TPath extends string>(data: TObject, path: TPath): GetFieldType<TObject, TPath> => {
  const value = get(data, path);
  unset(data, path);
  return value;
};

/**
 * The utility that gets the property value at `path` of `data` object and deletes the property from the `data` object.
 *
 * @template TObject, TPath, TDefault
 * @typeParam TObject - type of the `data` param
 * @typeParam TPath - type of the `path` param
 * @typeParam TDefault - the type that equals to the type of the resolved value
 * @param data - the object to query
 * @param path - the path of the property to get
 * @param defaultValue - the value to return if the resolved value is `undefined`
 * @returns Resolved value or `defaultValue` if the resolved value is `undefined`.
 *
 * @category Pop
 * @remarks The utility uses the external library {@link https://lodash.com | lodash}, specifically the {@link https://lodash.com/docs/4.17.15#get | get} and {@link https://lodash.com/docs/4.17.15#unset | unset} functions.
 */
export const popWithDefault = <TObject, TPath extends string, TDefault = GetFieldType<TObject, TPath>>(
  data: TObject,
  path: TPath,
  defaultValue: TDefault
) => {
  const value = get(data, path, defaultValue);
  unset(data, path);
  return value;
};
