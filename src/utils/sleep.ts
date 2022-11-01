export default async (millis: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, millis));
