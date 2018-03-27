const isDate = function (value) {
  return Object.prototype.toString.call(value) === '[object Date]'
}

export default isDate
