/**
 * The utility that helps transform `null` to `undefined`, other incoming values are simply returned.
 *
 * @template T
 * @param value - the value to be transformed
 * @typeParam T - the type of the `value` parameter
 * @returns `undefined` if `value` is `null`, otherwise returns `value` itself.
 *
 * @category Functions
 * @group Utils
 * @remarks The function name stands for **N**ull **t**o **U**ndefined.
 */
export default <T>(value: T | null): T | undefined => (value === null ? undefined : value);
