'use strict';

function isHTTPS(req) {
  var xForwardedProto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // Test using req.connection.encrypted
  var encrypted = isEmpty(req.connection.encrypted) ? null : req.connection.encrypted === true;

  if (encrypted) {
    return true;
  } // Test using req.protocol

  var httpsProtocol = isEmpty(req.protocol) ? null : req.protocol === 'https';

  if (httpsProtocol) {
    return true;
  } // Test using x-forwarded-proto header

  var httpsXforwarded =
    !xForwardedProto || isEmpty(req.headers['x-forwarded-proto'])
      ? null
      : req.headers['x-forwarded-proto'].indexOf('https') !== -1;

  if (httpsXforwarded) {
    return true;
  } // If no detection method is available return null

  if (encrypted === null && httpsProtocol === null && httpsXforwarded === null) {
    return null;
  }

  return false;
}

function isEmpty(v) {
  return v === undefined || v === null;
} // Export function

var isHttps = isHTTPS;

var _location =
  typeof location !== 'undefined'
    ? location
    : {
        origin: undefined,
      };

function getURL(req) {
  if (!req) {
    return _location.origin;
  }

  return encodeURI(
    'http' + (isHttps(req) ? 's' : '') + '://' + (req.headers['x-forwarded-host'] || req.headers.host) + req.url
  );
}

export default getURL;
