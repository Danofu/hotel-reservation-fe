/**
 * The utility that does nothing for the specified time in milliseconds.
 *
 * @param millis - the time in milliseconds
 *
 * @category Functions
 * @group Utils
 */
export default async (millis: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, millis));
