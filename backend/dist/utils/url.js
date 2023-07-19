"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = void 0;
/**
 * @function validateUrl
 *
 * This function is a validate the URL
 *
 * @param {value} url
 *
 * @returns {boolean} true if the url is valid, otherwise false
 */
var validateUrl = function (value) {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!urlPattern.test(value);
};
exports.validateUrl = validateUrl;
