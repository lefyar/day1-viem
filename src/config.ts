import dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY_A = process.env.PRIVATE_KEY_A;
const PRIVATE_KEY_B = process.env.PRIVATE_KEY_B;

if (!PRIVATE_KEY_A) {
  throw new Error('PRIVATE_KEY_A is required');
}

if (!PRIVATE_KEY_B) {
  throw new Error('PRIVATE_KEY_B is required');
}

export { PRIVATE_KEY_A, PRIVATE_KEY_B };
