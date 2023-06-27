import shortid from 'shortid';
import Urls from './model';
import db from '../../db';
import { validateUrl } from '../../utils';
import { BASE_URL_SHORTNER } from '../../config/env';

const urls = db.collection('urls');

const create = async ({ originalUrl }) => {

  if (!validateUrl(originalUrl)) {
      const msg = 'Invalid URL';
      const error = new Error(msg);
      error['code'] = 422;
      error['message'] = msg;
      throw error;
  }

  const urlId = shortid.generate();

  const shortUrl = `${BASE_URL_SHORTNER}/${urlId}`;

  const url = new Urls({
    urlId,
    originalUrl,
    shortUrl,
    date:new Date()
  });

  await urls.insertOne(url);

  return {
    url: {
      shortUrl
    },
  };
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

export { create, get };
