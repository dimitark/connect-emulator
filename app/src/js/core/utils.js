module.exports = exports = {};

exports.ab2str = function(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

exports.str2ab = function(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

exports.str2uint8arr = function(str) {
    var arr = new Uint8Array(str.length);

    for (var i = 0, strLen = str.length; i < strLen; i++) {
        arr[i] = str.charCodeAt(i);
    }

    return arr;
}

exports.uint8arr2ab = function(arr) {
    var buf = new ArrayBuffer(arr.length);
    var bufView = new Uint8Array(buf);

    for (var i = 0, len = arr.length; i < len; i++) {
        bufView[i] = arr[i];
    }

    return buf;
}

exports.uint8arr2str = function(arr) {
    var result = "";

    for (var i = 0, len = arr.length; i < len; i++) {
        result += String.fromCharCode(arr[i]);
    }

    return result;
}

exports.toHexString = function(arr) {
  var result = "";

  for (var i = 0, len = arr.length; i < len; i++) {
      result += arr[i].toString(16);
  }

  return result;
}
