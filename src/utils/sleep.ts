/**
 * The utility that does nothing for the specified time in milliseconds.
 *
 * @param millis - the time in milliseconds
 *
 * @category Sleep
 */
export default async (millis: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, millis));
