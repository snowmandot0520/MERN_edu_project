import { body } from 'express-validator';

const validateCreateShortUrlRequest = () => {
  return [
    body('originalUrl', 'Original Url is required')
      .isString()
  ];
};

export { validateCreateShortUrlRequest };
