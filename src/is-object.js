const isObject = function(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export default isObject
