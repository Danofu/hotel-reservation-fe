// If value is null returns undefined otherwise returns value
export default <T>(value: T) => (value === null ? undefined : value);
