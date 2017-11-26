export default function isEmpty (obj) {
  if (obj === null) {
    return true
  }
  if (obj === undefined) {
    return true
  }
  if (obj.length > 0) {
    return false
  }
  if (obj.length === 0) {
    return true
  }
  for (var key in obj) {
    if (obj.hasOwnProperty) {
      return false
    }
  }
  return true
}