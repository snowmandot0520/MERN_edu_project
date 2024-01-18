import crypto from 'crypto';

export const generateHash = async (payload) => {
  const hash = await crypto.createHash('sha512').update(payload).digest('hex');
  return hash;
};