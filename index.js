'use strict';

module.exports = function interpolateUrl(url, params) {

  if (url !== undefined && url !== null && typeof url !== 'string') {
    throw new Error('url must be a string');
  }

  var result = [];

  (url || '').split('/:').forEach(function (segment, i, arr) {
    if (i === 0) {
      return result.push(segment);
    } else {
      var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
      var key = segmentMatch[1];

      if (params[key] !== undefined) {
        result.push('/' + params[key]);
      } else {
        result.push('/:' + key);
      }

      result.push(segmentMatch[2] || '');
    }
  });

  return result.join('');
};
