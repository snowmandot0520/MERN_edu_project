import { reponseMessages } from '../constants/response-messages';
import { sendResponse } from './send-response';


/**
 * @function handleCustomError
 *
 * This function is a response sending wrapper for custom error handling
 * Instead of writing extra repetitive lines
 * use this wrapper
 *
 * @param {object} res the response object
 * 
 * @returns {object} error the error object
 */
export const handleCustomError = (res, error) => {
  if (error.code === 400) {
    return sendResponse(res, error.code, {}, error.message);
  }
  if (error.code === 401) {
    return sendResponse(res, error.code, {}, error.message);
  }
  if (error.code === 403) {
    return sendResponse(res, error.code, {}, error.message);
  }
  if (error.code === 404) {
    return sendResponse(res, error.code, {}, error.message);
  }
  if (error.code === 409) {
    return sendResponse(res, error.code, {}, error.message);
  }
  if (error.code === 422) {
    return sendResponse(res, error.code, {}, error.message);
  }
  return sendResponse(res, 500, error, reponseMessages.genericError);
};

/**
 * @function extractErrors
 *
 * This function is a extract error from errors array
 *
 * @param {Array} errors the errors array of object
 * 
 * @returns {Array} errorMessages returns validation error messages
 */
export const extractErrors = (errors : any) => {
  return errors.array({ onlyFirstError: true }).map(err => ({ [err.param]: err.msg }))
};