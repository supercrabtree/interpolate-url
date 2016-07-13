'use strict';

module.exports = function interpolateUrl(url, params) {

  if (url !== undefined && url !== null && typeof url !== 'string') {
    throw new Error('url must be a string');
  }

  var result = [];

  (url || '').split(':').forEach(function (segment, i) {
    if (i === 0) {
      return result.push(segment);
    } else {
      
    }
  });

  return result.join();
};
