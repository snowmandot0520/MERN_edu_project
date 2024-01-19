"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    // 1XX Informational
    HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
    HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    HttpStatusCode[HttpStatusCode["Processing"] = 102] = "Processing";
    // 2XX Success:
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
    HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
    HttpStatusCode[HttpStatusCode["MultiStatus"] = 207] = "MultiStatus";
    HttpStatusCode[HttpStatusCode["AlreadyReported"] = 208] = "AlreadyReported";
    HttpStatusCode[HttpStatusCode["IMUsed"] = 226] = "IMUsed";
    // 3XX Redirectional:
    HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
    HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
    HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
    HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
    HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
    HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpStatusCode[HttpStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    // 4XX Client Error:
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
    HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
    HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
    HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
    HttpStatusCode[HttpStatusCode["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    HttpStatusCode[HttpStatusCode["RequestURITooLong"] = 414] = "RequestURITooLong";
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
    HttpStatusCode[HttpStatusCode["ImATeapot"] = 418] = "ImATeapot";
    HttpStatusCode[HttpStatusCode["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    HttpStatusCode[HttpStatusCode["Locked"] = 423] = "Locked";
    HttpStatusCode[HttpStatusCode["FailedDependency"] = 424] = "FailedDependency";
    HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
    HttpStatusCode[HttpStatusCode["PreconditionRequired"] = 428] = "PreconditionRequired";
    HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
    HttpStatusCode[HttpStatusCode["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    HttpStatusCode[HttpStatusCode["ConnectionClosedWithoutResponse"] = 444] = "ConnectionClosedWithoutResponse";
    HttpStatusCode[HttpStatusCode["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    HttpStatusCode[HttpStatusCode["ClientClosedRequest"] = 499] = "ClientClosedRequest";
    // 5XX Server Error:
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
    HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
    HttpStatusCode[HttpStatusCode["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    HttpStatusCode[HttpStatusCode["InsufficientStorage"] = 507] = "InsufficientStorage";
    HttpStatusCode[HttpStatusCode["LoopDetected"] = 508] = "LoopDetected";
    HttpStatusCode[HttpStatusCode["NotExtended"] = 510] = "NotExtended";
    HttpStatusCode[HttpStatusCode["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
    HttpStatusCode[HttpStatusCode["NetworkConnectTimeoutError"] = 599] = "NetworkConnectTimeoutError";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
