const isError = function (value) {
  return Object.prototype.toString.call(value) === '[object Error]'
}

export default isError
