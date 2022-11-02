import Users from './model';
import db from '../../db';
import { generateHash } from '../../utils/hash-payload';

const users = db.collection('users');

const create = async ({ email, password, firstName, lastName }) => {
  const res = await users.findOne({ email });

  if (res) {
    const msg = 'Email already exits.';
    const error = new Error(msg);
    error['code'] = 409;
    error['message'] = msg;
    throw error;
  }

  const hashedPassword = await generateHash(password);
  const user = new Users({
    email,
    firstName,
    lastName,
    password: hashedPassword,
  });
  const newUser = await users.insertOne(user);

  return {
    user: {
      id: newUser.insertedId,
      firstName,
      lastName,
      email,
    },
  };
};

export { create };
