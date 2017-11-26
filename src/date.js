/**
 * 
 * @param {*} date
 * example
 * date(xxxxxx).format('yyyy-MM-dd HH:mm') 
 */
export default function (date = Date.now()) {
  const D = new Date(date)
  const T = {
    "y+": D.getFullYear(),
    "M+": D.getMonth() + 1,
    "d+": D.getDate(),
    "h+": D.getHours(),
    "m+": D.getMinutes(),
    "s+": D.getSeconds(),
    "q+": Math.floor((D.getMonth() + 3) / 3),
    "S": D.getMilliseconds()
  }
  return {
    D,
    format: (fmt) => {
      for (let k in T) {
        if (RegExp(`(${k})`).test(fmt)) {
          fmt = fmt.replace(RegExp.$1, T[k])
        }
      }
      return fmt
    }
  }
}
