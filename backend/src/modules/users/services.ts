import Users from './model';
import db from '../../db';
import { generateHash, createAccessToken } from '../../utils';
import { ObjectId } from 'mongodb';

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

const login = async ({ email, password }) => {
  const hashedPassword = await generateHash(password);
  const res = await users.findOne({ email, password: hashedPassword });

  if (!res) {
    const msg = 'Invalid email or password.';
    const error = new Error(msg);
    error['code'] = 404;
    error['message'] = msg;
    throw error;
  }

  const user = {
    id: res._id,
    email: res.email,
    firstName: res.firstName,
    lastName: res.lastName,
  };
  const accessToken = createAccessToken({ ...user, tokenType: 'LoginToken' });

  return {
    user,
    token: accessToken,
  };
};

const user = async (id: string) => {
  const o_id = new ObjectId(id);
  const res = await users.findOne({ _id: o_id });

  if (!res) {
    const msg = 'User not found in records';
    const error = new Error(msg);
    error['code'] = 404;
    error['message'] = msg;
    throw error;
  }
  delete res['password'];
  
  return { user: res };
};

export { create, login, user };
