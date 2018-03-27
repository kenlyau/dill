const isNumber = function (value) {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export default isNumber
