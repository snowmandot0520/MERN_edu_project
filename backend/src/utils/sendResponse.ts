import { Response } from 'express';

/**
 * @function sendResponse
 *
 * This function is a response sending wrapper
 * Instead of writing extra repetitive lines
 * use this wrapper
 *
 * @param {object} res the response object
 * @param {number} statusCode the http status code
 * @param {array | object } data the data you want to send with the response
 * @param {string} message the message you want to send for success/failure
 * 
 * @returns {object} res the res object
 */
export const sendResponse = (
  res: Response,
  statusCode: number,
  data = {},
  message: string | any,
) => {
  if (typeof statusCode !== 'number') {
    throw new Error('statusCode should be a number');
  }

  // status variable to store the status of the response either success or failed
  let status = null;

  // regex pattern to validate that the status code is always 3 digits in length
  const lengthPattern = /^[0-9]{3}$/;

  // check for the length of the status code, if its 3 then set default value for status as
  // failed
  // else throw an error
  if (!lengthPattern.test(statusCode as any)) {
    throw new Error('Invalid Status Code');
  }

  // regex to test that status code start with 2 or 3 and should me 3 digits in length
  const pattern = /^(2|3)\d{2}$/;

  // if the status code starts with 2, set status variable as success
  // eslint-disable-next-line no-unused-expressions
  pattern.test(statusCode as any) ? (status = 'success') : (status = 'failed');

  return res.status(statusCode).json({
    status,
    data,
    message,
  });
};
