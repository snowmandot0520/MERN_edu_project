import shortid from 'shortid';
import Urls from './model';
import db from '../../db';
import { validateUrl } from '../../utils';

const urls = db.collection('urls');

const create = async ({ originalUrl, baseURL, userId }) => {

  if (!validateUrl(originalUrl)) {
      const msg = 'Invalid URL';
      const error = new Error(msg);
      error['code'] = 422;
      error['message'] = msg;
      throw error;
  }

  const urlId = shortid.generate();

  const shortUrl = `${baseURL}/${urlId}`;

  const url = new Urls({
    urlId,
    originalUrl,
    shortUrl,
    date: new Date(),
    userId
  });

  await urls.insertOne(url);

  return {
    shortUrl
  }
};

const get = async (urlId: string) => {
  const res = await urls.findOne({ urlId });

  if (!res) {
    const msg = 'Short URL not found in records';
    const error = new Error(msg);
    error['code'] = 404;
    error['message'] = msg;
    throw error;
  }

  await urls.findOneAndUpdate({ urlId }, { $inc: { clicks: 1 } } );

  return res.originalUrl;
};

const getAll = async (userId: string) => {
  const res = await urls.find({ userId });

  if (!res) {
    const msg = 'No data available';
    const error = new Error(msg);
    error['code'] = 404;
    error['message'] = msg;
    throw error;
  }

  return res;
};

export { create, get, getAll };
