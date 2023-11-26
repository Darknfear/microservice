import bcrypt from 'bcrypt';

export const hashStr = async (str: string): Promise<string> => bcrypt.hash(str, Number(process.env.SALT_ROUND || 10));

export const compareStr = async (str: string, hash: string): Promise<boolean> => bcrypt.compare(str, hash);
