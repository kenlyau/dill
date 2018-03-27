const isBoolean = function (value) {
  return Object.prototype.toString.call(value) === '[object Boolean]'
}

export default isBoolean
